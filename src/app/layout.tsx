import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zento | Psihologi, Coachi & Mentori — toți într-un singur loc",
    template: "%s | Zento",
  },
  description:
    "Zento este platforma digitală care conectează clienții cu psihologi, coachi și mentori verificați. Programări online, matching AI, instrumente terapeutice.",
  keywords: [
    "psiholog online",
    "coach online",
    "mentor",
    "psihoterapie",
    "coaching",
    "sănătate mintală",
    "dezvoltare personală",
    "terapie online",
    "România",
  ],
  authors: [{ name: "Zento" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Zento",
    title: "Zento | Psihologi, Coachi & Mentori",
    description:
      "Platforma digitală care conectează clienții cu specialiști verificați în psihologie, coaching și mentorat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
