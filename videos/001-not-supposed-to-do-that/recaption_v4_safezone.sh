#!/usr/bin/env bash
# V001 v4 — same video/audio as v3 (v001_v3_clean.mp4, 33.4 s), captions moved into the TikTok/Reels/Shorts safe zone
# (x 60-940, y 230-1440; see CLAUDE.md). No burned-in #ad line — owner discloses in the post caption.
set -euo pipefail
cd "$(dirname "$0")"
IN=${1:-v001_v3_clean.mp4}
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
mkdir -p t; F=""; n=0
add() { F="${F:+$F,}$1"; }
L() { local s=$1 e=$2 col=$3 sz=$4 yc=$5 txt=$6; local lh=$((sz*13/10+14)); IFS='|' read -ra parts <<< "$txt"; local k=${#parts[@]}; local y0=$((yc - k*lh/2)); local i=0
  for p in "${parts[@]}"; do n=$((n+1)); printf "%s" "$p" > t/l$n.txt
    add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$sz:fontcolor=$col:borderw=4:bordercolor=black@0.9:box=1:boxcolor=black@0.35:boxborderw=12:x=500-text_w/2:y=$((y0+i*lh)):enable='between(t,$s,$e)'"; i=$((i+1)); done; }
P() { n=$((n+1)); printf "%s" "$6" > t/l$n.txt; add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$4:fontcolor=$3:borderw=4:bordercolor=black@0.9:x=500-text_w/2:y=$5-text_h/2:enable='between(t,$1,$2)'"; }
Y=1190
L 0.3  2.0  white 58 $Y "Ugh... I'm so bored."
L 2.0  4.6  white 58 $Y "What if I just|unroll it a little?"
L 4.9  7.3  white 58 $Y "Okay. That was|more than a little."
L 7.5  9.2  white 58 $Y "Still bored."
L 9.2  11.3 white 58 $Y "Hmm... the couch|looks fun."
L 11.3 12.5 yellow 80 $Y "GOLDIE!"
L 12.6 13.8 white 62 $Y "Wasn't me."
L 14.1 16.1 white 58 $Y "There's nothing to do|in this house."
L 16.2 18.2 white 58 $Y "Wait... what's|that smell?"
L 19.4 21.5 white 58 $Y "Ooh, there's treats|hiding in here!"
L 21.5 24.0 white 58 $Y "This is way more fun|than wrecking|the house!"
L 24.2 26.1 yellow 58 $Y "Why is it so|quiet in here?"
L 26.3 28.3 white 58 $Y "Shh. I'm being good."
L 28.5 30.8 white 58 $Y "With this in the house,|who needs the couch?"
L 30.8 33.4 white 58 $Y "Get one for your pup -|it's in my bio!"
P 28.8 33.4 white 46 1000 "Goldie's snuffle mat - link in bio"
ffmpeg -y -v error -i "$IN" -vf "$F" -c:v libx264 -preset veryfast -crf 18 -c:a copy v001_v4_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v001_v4_captioned.mp4
echo DONE
