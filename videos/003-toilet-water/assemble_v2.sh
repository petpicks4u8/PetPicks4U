#!/usr/bin/env bash
# V003 v2 — natural toilet opener (no line), guilty "not supposed to drink from here", 0.4 s crossfade to fountain.
# 15.0 s, 1080x1920, 30 fps. Expects c1..c5 in ../c (c2 = new guilty clip) and n2..n5 in ../a. Benji VO at 1.04x.
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0 2.0 s1.mp4   # 0.0  slurping (no line)
seg $C/c2.mp4 0 3.4 s2.mp4   # 2.0  guilty look  "Oops... I'm not supposed to drink from here, am I?"
seg $C/c3.mp4 0 4.5 s3.mp4   # 5.0  (crossfade 0.4 s) fountain  "Mom and Dad got me this fountain..."
seg $C/c4.mp4 0 4.0 s4.mp4   # 9.5  whirlpool close-up  "The water swirls, a five-layer filter grabs the fur, and no puddles!"
seg $C/c5.mp4 0 1.5 s5.mp4   # 13.5 smile  "It's in my bio!" -> 15.0
ffmpeg -y -v error -i s1.mp4 -i s2.mp4 -i s3.mp4 -i s4.mp4 -i s5.mp4 -filter_complex \
 "[0]settb=AVTB,fps=30[v0];[1]settb=AVTB,fps=30[v1];[2]settb=AVTB,fps=30[v2];[3]settb=AVTB,fps=30[v3];[4]settb=AVTB,fps=30[v4];[v0][v1]concat=n=2:v=1:a=0,settb=AVTB,fps=30[a];[a][v2]xfade=transition=fade:duration=0.4:offset=5.0[b];[b][v3][v4]concat=n=3:v=1:a=0,format=yuv420p[v]" \
 -map "[v]" -c:v libx264 -preset veryfast -crf 18 video.mp4
D=(0 0 2050 5050 9550 13550)
IN=""; FL=""; k=0; for i in 2 3 4 5; do k=$((k+1)); IN="$IN -i $A/n$i.mp3"; FL="$FL[$k:a]atempo=1.04,adelay=${D[$i]}|${D[$i]},volume=1.6[a$k];"; done
ffmpeg -y -v error -i video.mp4 $IN -filter_complex "${FL}[a1][a2][a3][a4]amix=inputs=4:normalize=0,apad[aout]" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 15 v003_v2_clean.mp4
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap s "*slurp slurp slurp*"
cap n2 "Oops... I'm not supposed\nto drink from here, am I?"
cap n3 "Mom and Dad got me this fountain...\nand let me tell you, it's WAY\nbetter than the toilet!"
cap n4 "The water swirls, a five-layer\nfilter grabs the fur,\nand no puddles!"
cap n5 "It's in my bio!"
cap l1 "whirlpool flow"
cap l2 "5-layer filter  |  anti-splash wall"
cap cta "Goldie's fountain - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T s 0.2 2.0 white 56 h*0.22),$(T n2 2.05 5.0 white 60 h*0.22),$(T n3 5.05 9.5 white 54 h*0.20),$(T n4 9.55 13.5 white 54 h*0.20),$(T l1 9.8 13.5 cyan 48 h*0.60),$(T l2 10.6 13.5 cyan 40 h*0.655),$(T n5 13.55 15.0 white 68 h*0.24),$(T cta 13.5 15.0 white 54 h*0.70),$(T ad 0 15.0 white 28 h*0.80)"
ffmpeg -y -v error -i v003_v2_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v003_v2_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v003_v2_captioned.mp4
echo DONE
