"use client";

import { useSearchParams } from "next/navigation";
import type { SearchRecord } from "@/lib/types";
import { SearchPanel } from "./SearchPanel";

/** SearchPanel pre-filled from ?q= (keeps /products statically rendered). */
export function UrlSearch({ records, suggestions }: { records: SearchRecord[]; suggestions: string[] }) {
  const q = useSearchParams().get("q") ?? "";
  return <SearchPanel key={q} records={records} suggestions={suggestions} initialQuery={q} />;
}
