#!/usr/bin/env python3
"""V007 "Same Stick" v1: 8 clips + 8 Cody (minimax) lines, about 25 s. Runs in the Higgsfield sandbox.

Voice: Cody canon, natural pitch. Long pauses are trimmed to 0.22 s, then a light atempo (1.2, which keeps the pitch)
fits the owner's 25 s limit. Shot cuts follow the voice lines.

Music: CC0 "Lofi music 001" (Wikimedia Commons).
- Shots 1-2: slowed, muffled and quiet ("sad" version).
- From shot 3: the normal track (colour comes back).
"""
import os, subprocess, json

SH = lambda c: subprocess.run(c, shell=True, check=True)
DUR = lambda f: float(subprocess.check_output(
    f"ffprobe -v error -show_entries format=duration -of csv=p=0 {f}", shell=True))

CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/"
CLIPS = ["hf_20261001_171553_2adcb7c5-6f6e-4b3b-8e17-4b7cffd1cbf1",  # 1 sad push-in
         "hf_20261001_171553_8ff02b29-f1ee-4edc-ac53-5a6151e45bdb",  # 2 feet on dowel
         "hf_20261001_171553_f22af34e-c1d8-4432-ae96-dd687cda5e69",  # 3 install + head up
         None, None, None, None, None]                              # 4-8 filled from argv json
VO = ["f537d8dc-9fa2-4c77-9a0a-fc6a1fc0680d", "d227b26c-debc-4ede-89bf-688ebfa70a97",
      "c465ea73-8408-4dab-a310-4730e5279e98", "d99abaf0-d51f-48bb-b4c3-a640cc8e0f72",
      "7a840457-5cf6-428d-9925-1c8c7d27fa33", "3cdcf74b-bd43-40b8-a935-640d2ef6f6e4",
      "832f2a4c-bddc-4fcb-9fab-6cba321fb4bb", "26f9ee12-78c1-41e4-9fbc-87e0e5564b2f"]
LOFI = "https://commons.wikimedia.org/wiki/Special:FilePath/Lofi_music_001.wav"
FONT = "/usr/share/fonts/truetype/higgsfield/Montserrat-ExtraBold.ttf"
STARF = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
TEMPO, LEAD, GAP, TARGET = 1.2, 0.2, 0.1, 25.0

extra = json.loads(os.environ.get("CLIPS_4_8", "[]"))
CLIPS[3:] = extra
os.makedirs("w", exist_ok=True); os.chdir("w")

# 1. downloads
for i, c in enumerate(CLIPS, 1):
    if not os.path.exists(f"c{i}.mp4"): SH(f"curl -sfo c{i}.mp4 {CDN}{c}.mp4")
for i, v in enumerate(VO, 1):
    if not os.path.exists(f"vo{i}.mp3"): SH(f"curl -sfo vo{i}.mp3 {CDN}hf_20261001_171602_{v}.mp3")
if not os.path.exists("lofi.wav"): SH(f"curl -sfLo lofi.wav '{LOFI}'")

# 2. voice: tighten long pauses, trim the ends, light tempo (pitch unchanged)
d = []
for i in range(1, 9):
    SH(f"ffmpeg -y -v error -i vo{i}.mp3 -af \"aresample=48000,highpass=f=80,"
       "silenceremove=start_periods=1:start_threshold=-40dB:stop_periods=-1:stop_duration=0.22:stop_threshold=-40dB:stop_silence=0.22,"
       f"areverse,silenceremove=start_periods=1:start_threshold=-40dB,areverse,atempo={TEMPO}\" p{i}.wav")
    d.append(DUR(f"p{i}.wav"))
start, t = [], LEAD
for x in d: start.append(round(t, 3)); t += x + GAP
D = max(TARGET, round(t + 0.2, 2))
print("voice", [round(x, 2) for x in d], "starts", start, "total", D)

# 3. shots: cut 0.05 s before each line starts
cut = [0.0] + [s - 0.05 for s in start[1:]] + [D]
lens = [round(cut[k + 1] - cut[k], 3) for k in range(8)]
N = "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,setsar=1,format=yuv420p"
SAD = ",eq=saturation=0.55:brightness=-0.03"
for k in range(8):
    vf = N + (SAD if k < 2 else "")
    SH(f"ffmpeg -y -v error -ss 0.2 -t {lens[k]} -i c{k+1}.mp4 -an -vf '{vf}' -c:v libx264 -preset veryfast -crf 18 s{k+1}.mp4")
open("list.txt", "w").write("".join(f"file 's{k}.mp4'\n" for k in range(1, 9)))
SH("ffmpeg -y -v error -f concat -safe 0 -i list.txt -c copy video.mp4")

# 4. audio
ins = " ".join(f"-i p{i}.wav" for i in range(1, 9))
fc = "".join(f"[{k}]adelay={int(start[k]*1000)}|{int(start[k]*1000)}[v{k}];" for k in range(8))
fc += "".join(f"[v{k}]" for k in range(8)) + f"amix=inputs=8:normalize=0,volume=1.3,apad=whole_dur={D},aformat=channel_layouts=stereo[v]"
SH(f"ffmpeg -y -v error {ins} -filter_complex \"{fc}\" -map '[v]' -t {D} voice.wav")
T3 = cut[2]
SH(f"ffmpeg -y -v error -i lofi.wav -i voice.wav -i video.mp4 -filter_complex \""
   f"[0]aresample=48000,aformat=channel_layouts=stereo,asplit=2[a][b];"
   f"[a]asetrate=48000*0.84,aresample=48000,lowpass=f=1400,atrim=0:{T3},asetpts=PTS-STARTPTS,volume=0.22,afade=t=in:d=0.6,afade=t=out:st={T3-0.12}:d=0.12[sad];"
   f"[b]atrim=0:{D-T3},asetpts=PTS-STARTPTS,volume=0.22,afade=t=in:d=0.25,afade=t=out:st={D-T3-1.3}:d=1.3,adelay={int(T3*1000)}|{int(T3*1000)}[hap];"
   f"[sad][hap]amix=inputs=2:normalize=0,apad=whole_dur={D}[m];"
   f"[1]asplit=2[vk][vo];[m][vk]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[md];"
   f"[md][vo]amix=inputs=2:normalize=0,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[out]\" "
   f"-map 2:v -map '[out]' -c:v copy -c:a aac -b:a 192k -t {D} v007_v1_clean.mp4")

# 5. captions: sentence case, lower-middle safe zone, each line drawn separately so it is centred
os.makedirs("t", exist_ok=True); n = [0]
def L(text, t0, t1, y, size=58, font=FONT, color="white"):
    n[0] += 1; p = f"t/{n[0]}.txt"; open(p, "w").write(text)
    return (f"drawtext=fontfile={font}:textfile={p}:fontsize={size}:fontcolor={color}:borderw=5:"
            f"bordercolor=black@0.85:x=(w-text_w)/2:y=h*{y}:enable='between(t,{t0:.2f},{t1:.2f})'")
c = cut; Y = [0.56, 0.605, 0.65]
mid5 = (c[4] + c[5]) / 2
F = [
    L("If your bird's perch", c[0] + 0.15, c[1], Y[0], 68), L("looks like this...", c[0] + 0.15, c[1], Y[1], 68),
    L("Same-size perches can lead", c[1], c[2], Y[0]), L("to painful sore feet", c[1], c[2], Y[1]), L("(bumblefoot)", c[1], c[2], Y[2], 50),
    L("Natural wood perches", c[2] + 0.1, c[3], Y[0]), L("No tools needed", c[2] + 0.1, c[3], Y[1], 50),
    L("Mango's review:", c[3], c[4], Y[0], 64), L("8 natural wood perches", c[3], c[4], Y[1]),
    L("1. Different sizes", c[4], mid5, Y[0]), L("= a real foot workout", c[4], mid5, Y[1]),
    L("2. Spreads the pressure,", mid5, c[5], Y[0]), L("helps prevent sore feet", mid5, c[5], Y[1]),
    L("3. Rough bark helps wear", c[5], c[6], Y[0]), L("nails down naturally", c[5], c[6], Y[1]),
    L("4. Natural wood to chew", c[6], c[7], Y[0]),
    L("★★★★★", c[7], D, 0.535, 72, STARF, "0xFFC83D"),
    L("Give your bird's feet", c[7] + 0.4, D, Y[1]), L("a break.", c[7] + 0.4, D, Y[2]), L("Link in bio.", c[7] + 1.6, D, 0.695, 54),
]
SH(f"ffmpeg -y -v error -i v007_v1_clean.mp4 -vf \"{','.join(F)}\" -c:v libx264 -preset veryfast -crf 18 -c:a copy v007_v1_captioned.mp4")
print("cuts", [round(x, 2) for x in cut], "duration", DUR("v007_v1_captioned.mp4"))
