#!/usr/bin/env bash
# V005 v3 "Drinking Bowl": 7 clips + 4 Cody (minimax) lines, 19.5 s. Runs in the Higgsfield sandbox.
# Light edit on purpose: hard cuts, one punch-in (the "Very hydrated." beat), minimal captions.
# Expects c1..c7.mp4 in ../c, vo1..vo4.mp3 in ../a, lofi.wav + splash.ogg + drip.ogg in ../m
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a; M=../m
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N${5:+,$5}" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0.0 2.5 s1.mp4                         # 0.0  mid-splash ECU        "I was told this was a drinking bowl."
seg $C/c2.mp4 0.0 2.5 s2.mp4                         # 2.5  pull-back reveal (silent)
seg $C/c3.mp4 1.0 2.0 s3.mp4                         # 5.0  steps in
seg $C/c4.mp4 0.5 2.0 s4.mp4                         # 7.0  dunk + turn
seg $C/c5.mp4 0.5 3.0 s5.mp4                         # 9.0  dry table              "Nobody yelled this time."
# 12.0 drenched stare: static 0.8 s, then a gentle 100->108 % punch-in over 0.4 s as the line lands
seg $C/c6.mp4 0.3 4.0 s6.mp4 "zoompan=z='if(lt(on,24),1,min(1.08,1+(on-24)*0.0067))':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1080x1920:fps=30"
seg $C/c7.mp4 0.0 3.5 s7.mp4                         # 16.0 shake-off, back to the bath  "Same time tomorrow."
printf "file '%s'\n" s1.mp4 s2.mp4 s3.mp4 s4.mp4 s5.mp4 s6.mp4 s7.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4

# Voice: Cody canon, no pitch/effects, just a gentle highpass and level.
ffmpeg -y -v error -i $A/vo1.mp3 -i $A/vo2.mp3 -i $A/vo3.mp3 -i $A/vo4.mp3 -filter_complex \
"[0]aresample=48000,highpass=f=80,adelay=0|0[a];[1]aresample=48000,highpass=f=80,adelay=9600|9600[b];\
[2]aresample=48000,highpass=f=80,adelay=12800|12800[c];[3]aresample=48000,highpass=f=80,adelay=16700|16700[d];\
[a][b][c][d]amix=inputs=4:normalize=0,volume=1.3,apad=whole_dur=19.5,aformat=channel_layouts=stereo[v]" -map "[v]" -t 19.5 voice.wav

# Water only: loud ASMR splash 0-2.5, bath splashing under 2.5-12 (duck at the line), silence at 12, one drip,
# a shake-off spray at 16.2, and a splash at 19.1 that matches the opening (loop).
ffmpeg -y -v error -i $M/splash.ogg -i $M/drip.ogg -filter_complex \
"[0]aresample=48000,asplit=4[s1][s2][s3][s4];\
[s1]atrim=start=6.9:duration=2.6,asetpts=PTS-STARTPTS,volume=3.0,afade=t=out:st=2.3:d=0.3[h];\
[s2]atrim=start=9:duration=9.5,asetpts=PTS-STARTPTS,volume=1.3,afade=t=in:d=0.3,afade=t=out:st=9.1:d=0.4,adelay=2500|2500[b];\
[s3]atrim=start=20:duration=0.7,asetpts=PTS-STARTPTS,volume=1.2,afade=t=in:d=0.05,afade=t=out:st=0.4:d=0.3,adelay=16200|16200[k];\
[s4]atrim=start=6.9:duration=0.4,asetpts=PTS-STARTPTS,volume=2.6,afade=t=in:d=0.05,adelay=19100|19100[e];\
[1]aresample=48000,volume=16,adelay=12250|12250[d];\
[h][b][k][e][d]amix=inputs=5:normalize=0,apad=whole_dur=19.5,aformat=channel_layouts=stereo[s]" -map "[s]" -t 19.5 sfx.wav

# Music: lo-fi (CC0) enters at 2.5, cut to silence at 12.0, returns at 14.3, fades out at the end. Ducked under the voice.
ffmpeg -y -v error -i video.mp4 -i $M/lofi.wav -i voice.wav -i sfx.wav -filter_complex \
"[1]aresample=48000,atrim=start=0:duration=19.5,asetpts=PTS-STARTPTS,volume=0.22,aformat=channel_layouts=stereo,\
volume='if(lt(t,2.5),0,if(lt(t,3.3),(t-2.5)/0.8,if(lt(t,12.0),1,if(lt(t,14.3),0,if(lt(t,15.0),(t-14.3)/0.7,if(gt(t,18.3),max(0,(19.5-t)/1.2),1))))))':eval=frame[m];\
[2]asplit=2[vk][vo];[m][vk]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[md];\
[md][vo][3]amix=inputs=3:normalize=0,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[a]" \
-map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t 19.5 v005_v3_clean.mp4

# Captions: few, short, lowercase. Big for the hook and the payoff only.
mkdir -p t; cap() { printf "%b" "$2" > t/$1.txt; }
cap c1 "i was told this was\na drinking bowl"
cap c2 "nobody yelled this time."
cap c3 "very hydrated."
cap cta "Mango's bath - link in bio"
cap ad "#ad  |  Amazon affiliate  |  AI-generated"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=white:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T c1 0.15 2.5 _ 72 h*0.20),$(T c2 9.6 12.0 _ 48 h*0.20),$(T c3 12.8 16.0 _ 84 h*0.20),$(T cta 16.3 19.5 _ 46 h*0.74),$(T ad 16.3 19.5 _ 30 h*0.79)"
ffmpeg -y -v error -i v005_v3_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v005_v3_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v005_v3_captioned.mp4
echo DONE
