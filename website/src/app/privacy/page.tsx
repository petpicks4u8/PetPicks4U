import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What PetPicks4You collects (very little) and why.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <ProsePage eyebrow="Privacy" title="Privacy, briefly." intro="No accounts, no pop-ups, no selling your data. Here’s the short version.">
      <h2>What we measure</h2>
      <p>
        To learn which videos and products people find useful, we record anonymous events such as “someone tapped View on Amazon for the
        snuffle mat” along with the page, the campaign tags in the link you followed (for example utm_source=tiktok), and a rough device
        type. We don’t collect your name, email or precise location.
      </p>
      <p>
        We keep a small note in your browser’s session storage so a click can be matched to the video that sent you. It’s cleared when you
        close the tab. If we enable Google Analytics, it may set its own cookies.
      </p>
      <h2>When you leave for Amazon</h2>
      <p>
        Amazon’s own privacy notice applies on amazon.com. Amazon may use cookies to recognise that you arrived through our affiliate link.
      </p>
      <h2>Questions</h2>
      <p>Get in touch through our contact page and we’ll help.</p>
      <p className="text-sm text-muted">Last updated September 2026.</p>
    </ProsePage>
  );
}
