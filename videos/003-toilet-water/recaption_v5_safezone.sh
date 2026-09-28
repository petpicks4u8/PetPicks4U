#!/usr/bin/env bash
# V003 v4 — same video/audio as v3 (v003_v3_clean.mp4), captions moved into the social-app SAFE ZONE.
# 1080x1920 safe zone used for TikTok / Reels / Shorts:
#   avoid top 0-230 px (tabs/status), bottom 1440-1920 px (username, description, music), right 940-1080 px (like/comment/share).
#   => usable box x 60-940, y 230-1440. Every line is centred on x=500 (centre of that box); widest line 760 px.
# Layout: spoken captions centred at y≈1190 (62%, lower-middle, above the app's description text), one pill per line;
#         feature labels at y≈400 (21%); CTA at y≈1000 (52%); small #ad/AI line at y=240, just under the app tabs.
# ffmpeg 5.1 has no text_align, so each caption line is its own drawtext.
set -euo pipefail
cd "$(dirname "$0")"
IN=${1:-v003_v3_clean.mp4}
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
mkdir -p t; F=""; n=0
add() { F="${F:+$F,}$1"; }
# L start end colour size ycentre_px "line1|line2|..."
L() { local s=$1 e=$2 col=$3 sz=$4 yc=$5 txt=$6; local lh=$((sz*13/10+14)); IFS='|' read -ra parts <<< "$txt"; local k=${#parts[@]}; local y0=$((yc - k*lh/2)); local i=0
  for p in "${parts[@]}"; do n=$((n+1)); printf "%s" "$p" > t/l$n.txt
    add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$sz:fontcolor=$col:borderw=4:bordercolor=black@0.9:box=1:boxcolor=black@0.35:boxborderw=12:x=500-text_w/2:y=$((y0+i*lh)):enable='between(t,$s,$e)'"; i=$((i+1)); done; }
# P start end colour size ycentre_px "text"  (plain label, no box)
P() { n=$((n+1)); printf "%s" "$6" > t/l$n.txt; add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$4:fontcolor=$3:borderw=4:bordercolor=black@0.9:x=500-text_w/2:y=$5-text_h/2:enable='between(t,$1,$2)'"; }
Y=1190
L 2.9  5.8  white 58 $Y "Oops... I'm not supposed|to drink from here,|am I?"
L 5.9  8.0  white 58 $Y "Mom and Dad got me|this fountain..."
L 8.0  10.8 white 58 $Y "and let me tell you,|it's WAY better|than the toilet!"
L 10.9 14.4 white 58 $Y "The water swirls|around... so I keep|coming back for more!"
L 14.5 16.9 white 58 $Y "A five-layer filter|catches the fur|and crumbs..."
L 16.9 19.4 white 58 $Y "so every sip is|fresh and clean."
L 19.5 20.9 white 58 $Y "And that tall|splash wall?"
L 20.9 23.5 white 58 $Y "No more puddles from|my sloppy drinking!"
L 23.6 26.1 white 72 $Y "It's in my bio!"
P 11.2 14.4 cyan 50 400 "whirlpool flow"
P 14.8 19.4 cyan 50 400 "5-layer filtration"
P 19.8 23.5 cyan 50 400 "anti-splash design"
P 23.5 26.1 white 50 1000 "Goldie's fountain - link in bio"
ffmpeg -y -v error -i "$IN" -vf "$F" -c:v libx264 -preset veryfast -crf 18 -c:a copy v003_v5_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v003_v5_captioned.mp4
echo DONE
