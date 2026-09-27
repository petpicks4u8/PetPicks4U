#!/usr/bin/env bash
# V005 "Morning Dip" v1: 5 clips + 4 Mango (Dylan) lines, ~20 s. Runs in the Higgsfield sandbox.
# Expects clips c1..c5 in ../c and voice lines vo1..vo4 in ../a (wav).
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0 3.5 s1.mp4   # 0.0  peek at the water        "Morning routine."
seg $C/c2.mp4 0 4.0 s2.mp4   # 3.5  head dip                  "Step one... the dip."
seg $C/c3.mp4 0 4.0 s3.mp4   # 7.5  splash (no VO)
seg $C/c4.mp4 0 4.0 s4.mp4   # 11.5 damp and blissful         "Ahhh... so refreshed."
seg $C/c5.mp4 0 4.5 s5.mp4   # 15.5 puffball + CTA            "Clean. Fluffy. Ready for the day."
printf "file '%s'\n" s1.mp4 s2.mp4 s3.mp4 s4.mp4 s5.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4
D=(0 400 3900 12000 16100)
IN=""; FL=""; for i in 1 2 3 4; do IN="$IN -i $A/vo$i.wav"; FL="$FL[$i:a]adelay=${D[$i]}|${D[$i]},volume=1.5[a$i];"; done
ffmpeg -y -v error -i video.mp4 $IN -filter_complex "${FL}[a1][a2][a3][a4]amix=inputs=4:normalize=0,apad[aout]" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 20 v005_v1_clean.mp4
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap c1 "Morning routine."
cap c2 "Step one...\nthe dip."
cap c3 "Ahhh...\nso refreshed."
cap c4 "Clean. Fluffy.\nReady for the day."
cap cta "Mango's morning bath - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T c1 0.4 3.4 white 64 h*0.22),$(T c2 3.9 7.4 white 64 h*0.22),$(T c3 12.0 15.4 white 64 h*0.22),$(T c4 16.1 20 white 60 h*0.22),$(T cta 15.8 20 white 52 h*0.72),$(T ad 15.8 20 white 30 h*0.78)"
ffmpeg -y -v error -i v005_v1_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v005_v1_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v005_v1_captioned.mp4
echo DONE
