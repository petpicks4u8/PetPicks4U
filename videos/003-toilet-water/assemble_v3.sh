#!/usr/bin/env bash
# V003 v3 — fixed guilty shot (paws on floor), real lapping sound from Seedance/Kling native audio,
# extended benefits (swirl / filter / no puddles). 26.0 s, 1080x1920, 30 fps.
# Clips in ../c: c1 toilet(sound) c2 guilty c3 fountain(sound) c4 whirlpool(sound) c5 clear-water(sound) c6 drip/no-puddles(sound) c7 smile
# Voice in ../a: n2 n3 m4 m5 m6 n5 (Benji, 1.0x)
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0 2.8 s1.mp4   # 0.0  toilet lapping (natural sound, no line)
seg $C/c2.mp4 0 3.4 s2.mp4   # 2.8  guilty   "Oops... I'm not supposed to drink from here, am I?"
seg $C/c3.mp4 0 5.0 s3.mp4   # 5.8  xfade -> fountain  "Mom and Dad got me this fountain..."
seg $C/c4.mp4 0 3.6 s4.mp4   # 10.8 whirlpool   "The water swirls around... so I keep coming back for more!"
seg $C/c5.mp4 0 5.0 s5.mp4   # 14.4 clear water "A five-layer filter catches the fur and crumbs, so every sip is fresh and clean."
seg $C/c6.mp4 0 4.1 s6.mp4   # 19.4 drips / dry floor "And that tall splash wall? No more puddles from my sloppy drinking!"
seg $C/c7.mp4 0 2.5 s7.mp4   # 23.5 smile  "It's in my bio!" -> 26.0
ffmpeg -y -v error -i s1.mp4 -i s2.mp4 -i s3.mp4 -i s4.mp4 -i s5.mp4 -i s6.mp4 -i s7.mp4 -filter_complex \
 "[0]settb=AVTB,fps=30[v0];[1]settb=AVTB,fps=30[v1];[2]settb=AVTB,fps=30[v2];[3]settb=AVTB,fps=30[v3];[4]settb=AVTB,fps=30[v4];[5]settb=AVTB,fps=30[v5];[6]settb=AVTB,fps=30[v6];[v0][v1]concat=n=2:v=1:a=0,settb=AVTB,fps=30[a];[a][v2]xfade=transition=fade:duration=0.4:offset=5.8[b];[b][v3][v4][v5][v6]concat=n=5:v=1:a=0,format=yuv420p[v]" \
 -map "[v]" -c:v libx264 -preset veryfast -crf 18 video.mp4
# natural sound beds from the sound clips (clip, trim length, start ms)
amb() { ffmpeg -y -v error -t "$2" -i "$1" -vn -af "aresample=44100,aformat=channel_layouts=stereo,afade=t=in:d=0.05,afade=t=out:st=$(awk "BEGIN{print $2-0.15}"):d=0.15,adelay=$3|$3" -c:a pcm_s16le "$4"; }
amb $C/c1.mp4 2.8 0 b1.wav
amb $C/c3.mp4 5.0 5800 b3.wav
amb $C/c4.mp4 3.6 10800 b4.wav
amb $C/c5.mp4 5.0 14400 b5.wav
amb $C/c6.mp4 4.1 19400 b6.wav
V=(n2 n3 m4 m5 m6 n5); VD=(2900 5900 10900 14500 19500 23600)
IN=""; FL=""; k=5
for j in 0 1 2 3 4 5; do k=$((k+1)); IN="$IN -i $A/${V[$j]}.mp3"; FL="$FL[$k:a]aresample=44100,adelay=${VD[$j]}|${VD[$j]},volume=1.7[v$j];"; done
ffmpeg -y -v error -i video.mp4 -i b1.wav -i b3.wav -i b4.wav -i b5.wav -i b6.wav $IN -filter_complex \
 "[1:a][2:a][3:a][4:a][5:a]amix=inputs=5:normalize=0,volume=0.8[bed];${FL}[bed][v0][v1][v2][v3][v4][v5]amix=inputs=7:normalize=0,alimiter=limit=0.95,apad[aout]" \
 -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 26 v003_v3_clean.mp4
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap n2 "Oops... I'm not supposed\nto drink from here, am I?"
cap n3 "Mom and Dad got me this fountain...\nand let me tell you, it's WAY\nbetter than the toilet!"
cap m4 "The water swirls around...\nso I keep coming back for more!"
cap m5 "A five-layer filter catches\nthe fur and crumbs, so every\nsip is fresh and clean."
cap m6 "And that tall splash wall?\nNo more puddles from\nmy sloppy drinking!"
cap n5 "It's in my bio!"
cap l4 "whirlpool flow"
cap l5 "5-layer filtration"
cap l6 "anti-splash design"
cap cta "Goldie's fountain - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T n2 2.9 5.8 white 60 h*0.20),$(T n3 5.9 10.8 white 54 h*0.18),$(T m4 10.9 14.4 white 56 h*0.18),$(T l4 11.2 14.4 cyan 50 h*0.62),$(T m5 14.5 19.4 white 54 h*0.18),$(T l5 14.8 19.4 cyan 50 h*0.62),$(T m6 19.5 23.5 white 54 h*0.18),$(T l6 19.8 23.5 cyan 50 h*0.62),$(T n5 23.6 26.0 white 70 h*0.22),$(T cta 23.5 26.0 white 54 h*0.70),$(T ad 0 26.0 white 28 h*0.80)"
ffmpeg -y -v error -i v003_v3_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v003_v3_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v003_v3_captioned.mp4
echo DONE
