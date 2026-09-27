#!/usr/bin/env bash
# Assemble V001 rough cut (9:16, 1080x1920, 30 fps) from Higgsfield clips + voice lines.
# Runs inside the Higgsfield sandbox (ffmpeg). Expects clips c1..c9 (c6 = SH06b) in ../c and vo1..vo11 in ../a.
# Output: v001_rough_captioned.mp4 (burned captions + disclosure) and v001_rough_clean.mp4 (VO only, for CapCut).
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"

# segment: input, start, length  (timeline = script.md, adjusted to real VO lengths)
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0 3.0 s01.mp4   # 0.0  hook: nose at the roll
seg $C/c2.mp4 0 3.0 s02.mp4   # 3.0  attempt #1 aftermath
seg $C/c3.mp4 0 3.5 s03.mp4   # 6.0  cushion
seg $C/c4.mp4 0 3.0 s04.mp4   # 9.5  busted / innocent sit
seg $C/c5.mp4 0 3.0 s05.mp4   # 12.5 bored
seg $C/c5.mp4 3.0 1.5 s06a.mp4 # 15.5 head lift
seg $C/c6.mp4 0 1.5 s06b.mp4  # 17.0 the mat
seg $C/c7.mp4 0 3.5 s07.mp4   # 18.5 nose in mat (demo)
seg $C/c8.mp4 0 3.8 s08.mp4   # 22.0 wide, "so quiet"
seg $C/c9.mp4 0 4.2 s09.mp4   # 25.8 CTA -> ends 30.0
printf "file '%s'\n" s01.mp4 s02.mp4 s03.mp4 s04.mp4 s05.mp4 s06a.mp4 s06b.mp4 s07.mp4 s08.mp4 s09.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4

# voice placement (ms)
D=(0 400 3700 6400 9500 10700 12700 16300 18800 22200 25000 26000)
IN=""; FL=""; for i in $(seq 1 11); do IN="$IN -i $A/vo$i.mp3"; FL="$FL[$i:a]adelay=${D[$i]}|${D[$i]},volume=1.6[a$i];"; done
MIX=""; for i in $(seq 1 11); do MIX="$MIX[a$i]"; done
ffmpeg -y -v error -i video.mp4 $IN -filter_complex "${FL}${MIX}amix=inputs=11:normalize=0,apad[aout]" \
  -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 30 v001_rough_clean.mp4

# captions via textfiles (no escaping issues)
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap c1 "Don't do it, Goldie."
cap c2 "Ugh. I'm not supposed\nto do that."
cap c3 "This is different.\nThe cushion started it."
cap c4 "GOLDIE!"
cap c5 "Who? Never heard of him."
cap c6 "Look. I'm bored.\nAnd I have a very big nose."
cap c7 "Wait. Why does the grass\nsmell like chicken?"
cap c8 "Indoor grass. With snacks.\nWhy wasn't I told?"
cap c9 "Goldie? Why is it so quiet?"
cap c10 "Busy."
cap c11 "My indoor grass is in the bio.\nThe couch says you're welcome."
cap a1 "attempt #1"; cap a2 "attempt #2"
cap cta "Goldie's snuffle mat - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { # file start end color size y
  echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T c1 0.4 2.0 white 64 h*0.26),$(T a1 3.0 6.0 white 40 140),$(T c2 3.7 6.0 white 64 h*0.26),$(T a2 6.0 9.5 white 40 140),$(T c3 6.4 9.3 white 64 h*0.26),$(T c4 9.5 10.6 yellow 80 h*0.26),$(T c5 10.7 12.4 white 64 h*0.26),$(T c6 12.7 16.1 white 64 h*0.26),$(T c7 16.3 18.5 white 64 h*0.26),$(T c8 18.8 22.0 white 64 h*0.26),$(T c9 22.2 24.8 yellow 64 h*0.26),$(T c10 25.0 25.8 white 72 h*0.26),$(T c11 26.0 30.0 white 58 h*0.26),$(T cta 26.3 30.0 white 56 h*0.70),$(T ad 26.3 30.0 white 32 h*0.77)"
ffmpeg -y -v error -i v001_rough_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v001_rough_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v001_rough_captioned.mp4
