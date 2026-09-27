"use client";

import { Play } from "lucide-react";
import type { SocialPlatform } from "@/lib/types";
import { track } from "@/lib/analytics";
import { platformMeta } from "./icons";

export function WatchVideoLink({
  url,
  platform,
  productId,
  petId,
}: {
  url: string;
  platform?: SocialPlatform;
  productId: string;
  petId: string;
}) {
  const label = platform ? platformMeta[platform].label : "the video";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("video_click", { product_id: productId, pet_id: petId, destination: url, video_platform: platform })}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/70 px-6 text-[0.98rem] font-semibold text-ink ring-1 ring-line transition-[transform,background-color] duration-200 hover:bg-white active:scale-[0.97]"
    >
      <span className="grid size-6 place-items-center rounded-full bg-ink text-paper">
        <Play className="size-3 fill-current" aria-hidden />
      </span>
      Watch the video on {label}
    </a>
  );
}
