#!/usr/bin/env bash
# V003 "Fancy Bathroom Water" — 15.0 s, 1080x1920, 30 fps. Goldie VO (Benji) sped up 1.08x to fit 15 s.
# Expects clips c1..c5 in ../c and voice lines w1..w5 in ../a.
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0 2.4 s1.mp4   # 0.0  toilet lapping        "Mmm... fancy bathroom water."
seg $C/c2.mp4 0 2.5 s2.mp4   # 2.4  realization           "Wait... Mom and Dad SIT here?!"
seg $C/c3.mp4 0 3.7 s3.mp4   # 4.9  drinking at fountain  "Nope! My water swirls..."
seg $C/c4.mp4 0 3.4 s4.mp4   # 8.6  whirlpool close-up    "Five-layer filter grabs the fur and crumbs. And no puddles!"
seg $C/c5.mp4 0 3.0 s5.mp4   # 12.0 smile CTA -> 15.0     "Fountain's in my bio. Toilet's all yours!"
printf "file '%s'\n" s1.mp4 s2.mp4 s3.mp4 s4.mp4 s5.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4
D=(0 150 2450 4950 8650 12100)
IN=""; FL=""; for i in 1 2 3 4 5; do IN="$IN -i $A/w$i.mp3"; FL="$FL[$i:a]atempo=1.08,adelay=${D[$i]}|${D[$i]},volume=1.6[a$i];"; done
ffmpeg -y -v error -i video.mp4 $IN -filter_complex "${FL}[a1][a2][a3][a4][a5]amix=inputs=5:normalize=0,apad[aout]" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 15 v003_clean.mp4
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap w1 "Mmm... fancy bathroom water."
cap w2 "Wait... Mom and Dad\nSIT here?!"
cap w3 "Nope! MY water swirls...\nI keep coming back for more."
cap w4 "Five-layer filter grabs\nthe fur and crumbs.\nAnd no puddles!"
cap w5 "Fountain's in my bio.\nToilet's all yours!"
cap l1 "whirlpool flow"
cap l2 "5-layer filter  |  anti-splash wall"
cap cta "Goldie's fountain - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T w1 0.15 2.4 white 62 h*0.22),$(T w2 2.45 4.9 white 70 h*0.22),$(T w3 4.95 8.6 white 58 h*0.22),$(T l1 5.3 8.6 cyan 50 h*0.62),$(T w4 8.65 12.0 white 56 h*0.20),$(T l2 9.0 12.0 cyan 42 h*0.64),$(T w5 12.1 15.0 white 60 h*0.22),$(T cta 12.2 15.0 white 54 h*0.70),$(T ad 12.2 15.0 white 32 h*0.77)"
ffmpeg -y -v error -i v003_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v003_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v003_captioned.mp4
echo DONE
