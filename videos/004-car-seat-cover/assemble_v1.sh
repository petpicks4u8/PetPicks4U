#!/usr/bin/env bash
# V004 "First Class" v1. 24.6 s, 1080x1920, 30 fps. Kling 3.0 clips c1..c8 in ../c (c2 has native shake sound),
# Benji voice v1..v8 in ../a. v2 sped 1.12x (5.7 s raw). Captions in the safe zone (see CLAUDE.md); no burned-in #ad.
set -euo pipefail
cd "$(dirname "$0")"
C=../c; A=../a
FONT=/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf
N="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
seg() { ffmpeg -y -v error -ss "$2" -t "$3" -i "$1" -an -vf "$N" -c:v libx264 -preset veryfast -crf 18 "$4"; }
seg $C/c1.mp4 0   3.0 s1.mp4   # 0.0  messy seat      v1
seg $C/c2.mp4 0   5.0 s2.mp4   # 3.0  shake           v2 (+ native shake sound)
seg $C/c3.mp4 0   2.6 s3.mp4   # 8.0  cover reveal    v3
seg $C/c4.mp4 0   3.4 s4.mp4   # 10.6 hop in          v4
seg $C/c5.mp4 0   2.0 s5.mp4   # 14.0 wipe            v5
seg $C/c6.mp4 0   3.4 s6.mp4   # 16.0 flap + pocket   v6
seg $C/c7.mp4 0.5 2.2 s7.mp4   # 19.4 first class     v7
seg $C/c8.mp4 0   3.0 s8.mp4   # 21.6 CTA smile       v8 -> 24.6
ffmpeg -y -v error $(for i in 1 2 3 4 5 6 7 8; do printf -- "-i s$i.mp4 "; done) -filter_complex \
 "$(for i in 0 1 2 3 4 5 6 7; do printf "[$i]settb=AVTB,fps=30[v$i];"; done)[v0][v1][v2][v3][v4][v5][v6][v7]concat=n=8:v=1:a=0,format=yuv420p[v]" \
 -map "[v]" -c:v libx264 -preset veryfast -crf 18 video.mp4
ffmpeg -y -v error -t 5.0 -i $C/c2.mp4 -vn -af "aresample=44100,aformat=channel_layouts=stereo,afade=t=out:st=4.8:d=0.2,adelay=3000|3000,volume=0.6" -c:a pcm_s16le bed.wav
VD=(0 300 3150 8400 10800 14100 16100 19800 21800)
IN=""; FL=""; for i in 1 2 3 4 5 6 7 8; do IN="$IN -i $A/v$i.mp3"; T=""; [ $i = 2 ] && T="atempo=1.12,"; FL="$FL[$((i+1)):a]aresample=44100,${T}adelay=${VD[$i]}|${VD[$i]},volume=1.7[a$i];"; done
ffmpeg -y -v error -i video.mp4 -i bed.wav $IN -filter_complex \
 "${FL}[1:a][a1][a2][a3][a4][a5][a6][a7][a8]amix=inputs=9:normalize=0,alimiter=limit=0.95,apad[aout]" \
 -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 24.6 v004_v1_clean.mp4
mkdir -p t; F=""; n=0
add() { F="${F:+$F,}$1"; }
L() { local s=$1 e=$2 col=$3 sz=$4 yc=$5 txt=$6; local lh=$((sz*13/10+14)); IFS='|' read -ra parts <<< "$txt"; local k=${#parts[@]}; local y0=$((yc - k*lh/2)); local i=0
  for p in "${parts[@]}"; do n=$((n+1)); printf "%s" "$p" > t/l$n.txt
    add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$sz:fontcolor=$col:borderw=4:bordercolor=black@0.9:box=1:boxcolor=black@0.35:boxborderw=12:x=500-text_w/2:y=$((y0+i*lh)):enable='between(t,$s,$e)'"; i=$((i+1)); done; }
P() { n=$((n+1)); printf "%s" "$6" > t/l$n.txt; add "drawtext=fontfile=$FONT:textfile=t/l$n.txt:fontsize=$4:fontcolor=$3:borderw=4:bordercolor=black@0.9:x=500-text_w/2:y=$5-text_h/2:enable='between(t,$1,$2)'"; }
Y=1190
L 0.3  2.6  white 58 $Y "Dad says I'm not|allowed in the car|anymore."
L 3.15 6.0  white 58 $Y "Something about...|the fur. The mud."
L 6.0  8.3  white 58 $Y "And the shake."
L 8.4  10.6 white 58 $Y "Then Mom and Dad|got me THIS!"
L 10.8 14.0 white 58 $Y "Muddy paws?|No problem.|It's waterproof!"
L 14.1 16.0 white 58 $Y "Dad just wipes|it right off."
L 16.1 19.4 white 58 $Y "The sides cover|the doors, and there's|a pocket for my ball!"
L 19.8 21.6 white 72 $Y "First class, baby."
L 21.8 24.6 white 58 $Y "Dad's seats are safe.|It's in my bio!"
P 11.0 14.0 cyan 50 400 "waterproof"
P 14.2 16.0 cyan 50 400 "wipes clean"
P 16.3 19.4 cyan 50 400 "zip side flaps + pocket"
L 21.6 24.6 white 46 1000 "Goldie's seat cover|link in bio"
ffmpeg -y -v error -i v004_v1_clean.mp4 -vf "$F" -c:v libx264 -preset veryfast -crf 18 -c:a copy v004_v1_captioned.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 v004_v1_captioned.mp4
echo DONE
