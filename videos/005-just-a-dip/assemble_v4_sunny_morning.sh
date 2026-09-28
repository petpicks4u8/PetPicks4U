#!/usr/bin/env bash
# V005 v4 "Sunny Morning Dip": 8 clips + 5 Cody (minimax) lines, 24.5 s. Runs in the Higgsfield sandbox.
# c0 wake 7ad53483 · c3 side-entry 299973bc · c1 splash dfba5e37 · c4 dunk bd671d6a · c2 reveal 3159d979
# c5 dry table 9a2efca7 · c6 soaked stare 7024f43a · c8 CTA (same spot, shake + fluff) 78a65ce2
# vo1 "Mm... sun's out." 4122fdfc · vo2 "Bath day." fe6770d2 · vo3 "Don't mind me." b4182f55
# vo4 "Ahh... Refreshed. Relaxed. Slightly damp." 303db671 · vo5 "Your bird deserves a bath like mine... Link's in my bio." f1794095
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a; M=../m
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c0.mp4 0.0 4.0 s0.mp4   # 0.0  wake-up in the sun
seg $C/c3.mp4 0.3 3.0 s1.mp4   # 4.0  side entry
seg $C/c1.mp4 0.0 2.5 s2.mp4   # 7.0  splash
seg $C/c4.mp4 0.5 2.0 s3.mp4   # 9.5  dunk "Don't mind me."
seg $C/c2.mp4 0.0 2.5 s4.mp4   # 11.5 reveal on cage
seg $C/c5.mp4 0.5 2.0 s5.mp4   # 14.0 dry table
seg $C/c6.mp4 0.3 4.0 s6.mp4   # 16.0 soaked stare "Refreshed. Relaxed. Slightly damp."
seg $C/c8.mp4 0.3 4.5 s7.mp4   # 20.0 CTA "Your bird deserves a bath like mine... Link's in my bio."
printf "file '%s'\n" s0.mp4 s1.mp4 s2.mp4 s3.mp4 s4.mp4 s5.mp4 s6.mp4 s7.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4
D=24.5
ffmpeg -y -v error -i $A/vo1.mp3 -i $A/vo2.mp3 -i $A/vo3.mp3 -i $A/vo4.mp3 -i $A/vo5.mp3 -filter_complex \
"[0]aresample=48000,highpass=f=80,adelay=200|200[a];[1]aresample=48000,highpass=f=80,adelay=2650|2650[b];\
[2]aresample=48000,highpass=f=80,adelay=9700|9700[c];[3]aresample=48000,highpass=f=80,adelay=16200|16200[d];\
[4]aresample=48000,highpass=f=80,adelay=20400|20400[e];\
[a][b][c][d][e]amix=inputs=5:normalize=0,volume=1.3,apad=whole_dur=$D,aformat=channel_layouts=stereo[v]" -map "[v]" -t $D voice.wav
# Water only while he is in the bath (4.8-16.0), plus a small shake spray at the start of the CTA shot.
ffmpeg -y -v error -i $M/splash.ogg -filter_complex \
"[0]aresample=48000,asplit=3[s1][s2][s3];\
[s1]atrim=start=2.9:duration=2.3,asetpts=PTS-STARTPTS,volume=0.9,afade=t=in:d=0.3,afade=t=out:st=1.9:d=0.4,adelay=4800|4800[r];\
[s2]atrim=start=6.9:duration=9.0,asetpts=PTS-STARTPTS,volume=2.0,afade=t=in:d=0.2,volume='if(lt(t,4.5),1,0.55)':eval=frame,afade=t=out:st=8.4:d=0.6,adelay=7000|7000[b];\
[s3]atrim=start=20:duration=0.8,asetpts=PTS-STARTPTS,volume=1.0,afade=t=in:d=0.05,afade=t=out:st=0.5:d=0.3,adelay=20200|20200[k];\
[r][b][k]amix=inputs=3:normalize=0,apad=whole_dur=$D,aformat=channel_layouts=stereo[s]" -map "[s]" -t $D sfx.wav
# Lo-fi (CC0) bed throughout, soft, ducked under Cody, fades out at the end.
ffmpeg -y -v error -i video.mp4 -i $M/lofi.wav -i voice.wav -i sfx.wav -filter_complex \
"[1]aresample=48000,atrim=start=0:duration=$D,asetpts=PTS-STARTPTS,volume=0.22,aformat=channel_layouts=stereo,afade=t=in:d=1.0,afade=t=out:st=23.0:d=1.5[m];\
[2]asplit=2[vk][vo];[m][vk]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[md];\
[md][vo][3]amix=inputs=3:normalize=0,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[a]" \
-map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t $D v005_v4_clean.mp4
mkdir -p t; cap() { printf "%b" "$2" > t/$1.txt; }
cap c1 "bath day."
cap c2 "don't mind me."
cap c3 "refreshed. relaxed.\nslightly damp."
cap cta "get your bird one\nlink in bio"
cap ad "#ad  |  Amazon affiliate  |  AI-generated"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$4:fontcolor=white:line_spacing=12:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$5:enable='between(t,$2,$3)'"; }
VF="$(T c1 2.65 4.0 80 h*0.20),$(T c2 9.7 11.5 50 h*0.20),$(T c3 17.2 20.0 70 h*0.18),$(T cta 20.4 24.5 66 h*0.70),$(T ad 20.4 24.5 30 h*0.80)"
ffmpeg -y -v error -i v005_v4_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v005_v4_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v005_v4_captioned.mp4
echo DONE
