#!/usr/bin/env bash
# V001 v2 "Bored Goldie" — natural voiceover (Benji) over the same 9 approved clips. 32 s, 1080x1920, 30 fps.
# Expects clips c1..c9 in ../c and voice lines vo1..vo11 in ../a (vo4 = Maeve "GOLDIE!", vo9 = Maeve "Why is it so quiet").
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0   4.6 s01.mp4   # 0.0  nose at the roll      "Ugh... I'm so bored..."
seg $C/c2.mp4 0   2.7 s02.mp4   # 4.6  toilet paper mess     "Okay. That was more than a little."
seg $C/c3.mp4 0   4.0 s03.mp4   # 7.3  cushion               "Still bored. Hmm... the couch looks fun."
seg $C/c4.mp4 0   2.5 s04.mp4   # 11.3 innocent sit          "GOLDIE!" / "Wasn't me."
seg $C/c5.mp4 0   2.4 s05.mp4   # 13.8 bored on rug          "There's nothing to do in this house."
seg $C/c5.mp4 3.0 1.6 s06a.mp4  # 16.2 head lift             "Wait... what's that smell?"
seg $C/c6.mp4 0   1.5 s06b.mp4  # 17.8 the mat (no line)
seg $C/c7.mp4 0   4.0 s07.mp4   # 19.3 nose in mat           "There's treats hiding in here! ..."
seg $C/c8.mp4 0   4.3 s08.mp4   # 23.3 wide                  "Why is it so quiet in here?" / "Shh. I'm being good."
seg $C/c9.mp4 0   4.4 s09.mp4   # 27.6 CTA -> ends 32.0      "My snuffle mat's in the bio..."
printf "file '%s'\n" s01.mp4 s02.mp4 s03.mp4 s04.mp4 s05.mp4 s06a.mp4 s06b.mp4 s07.mp4 s08.mp4 s09.mp4 > list.txt
ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4
D=(0 300 4900 7500 11300 12600 14100 16200 19400 23500 25600 27900)
IN=""; FL=""; for i in $(seq 1 11); do IN="$IN -i $A/vo$i.mp3"; FL="$FL[$i:a]adelay=${D[$i]}|${D[$i]},volume=1.6[a$i];"; done
MIX=""; for i in $(seq 1 11); do MIX="$MIX[a$i]"; done
ffmpeg -y -v error -i video.mp4 $IN -filter_complex "${FL}${MIX}amix=inputs=11:normalize=0,apad[aout]" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 32 v001_v2_clean.mp4
mkdir -p t
cap() { printf "%b" "$2" > t/$1.txt; }
cap c1 "Ugh... I'm so bored.\nWhat if I just unroll it a little?"
cap c2 "Okay. That was\nmore than a little."
cap c3 "Still bored.\nHmm... the couch looks fun."
cap c4 "GOLDIE!"
cap c5 "Wasn't me."
cap c6 "There's nothing to do\nin this house."
cap c7 "Wait... what's that smell?"
cap c8 "There's treats hiding in here!\nThis is way better than\nwrecking the house."
cap c9 "Why is it so quiet in here?"
cap c10 "Shh. I'm being good."
cap c11 "My snuffle mat's in the bio.\nMom and Dad say you're welcome."
cap cta "Goldie's snuffle mat - link in bio"
cap ad "#ad  |  Amazon affiliate link  |  AI-generated video"
T() { echo "drawtext=fontfile=$FONT:textfile=t/$1.txt:fontsize=$5:fontcolor=$4:line_spacing=10:borderw=5:bordercolor=black@0.85:x=(w-text_w)/2:y=$6:enable='between(t,$2,$3)'"; }
VF="$(T c1 0.3 4.6 white 60 h*0.24),$(T c2 4.9 7.3 white 60 h*0.24),$(T c3 7.5 11.3 white 60 h*0.24),$(T c4 11.3 12.5 yellow 80 h*0.24),$(T c5 12.6 13.8 white 64 h*0.24),$(T c6 14.1 16.1 white 60 h*0.24),$(T c7 16.2 18.2 white 60 h*0.24),$(T c8 19.4 23.3 white 58 h*0.24),$(T c9 23.5 25.4 yellow 60 h*0.24),$(T c10 25.6 27.6 white 64 h*0.24),$(T c11 27.9 32.0 white 56 h*0.24),$(T cta 28.2 32.0 white 56 h*0.70),$(T ad 28.2 32.0 white 32 h*0.77)"
ffmpeg -y -v error -i v001_v2_clean.mp4 -vf "$VF" -c:v libx264 -preset veryfast -crf 18 -c:a copy v001_v2_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v001_v2_captioned.mp4
echo DONE
