import type { Metadata } from "next";
import { DirectionProvider } from "@/components/foundations/direction/direction";

// Fonts are self-hosted from npm so the build never depends on Google Fonts.
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/oswald";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sam Evans",
  description:
    "Sam Evans, product leader. Teamworks Influencer, General Manager, athlete payments, NASCAR's Driver Incentive Program. Now co-founder of LiftFlow.",
};

const fontVars = {
  "--font-inter": "'Inter Variable'",
  "--font-mono-source": "'JetBrains Mono Variable'",
  "--font-display": "'Oswald Variable'",
} as React.CSSProperties;

// The site is always dark; the navy ground and foil cards are the design.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" dir="ltr" className="dark h-full antialiased" style={fontVars}>
      <body className="flex min-h-full flex-col font-sans">
        <DirectionProvider locale="en-US">{children}</DirectionProvider>
      </body>
    </html>
  );
}
