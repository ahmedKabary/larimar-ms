import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Mohamed Sharawi | Sales Supervisor | Larimar Port Ghalib",
  description:
    "Mohamed Sharawi - Sales Supervisor representing Larimar, the premier residential resort community in Port Ghalib, Marsa Alam, Egypt. Find your luxury villa, suite, or townhouse on the Red Sea coastline.",
  keywords: [
    "Mohamed Sharawi",
    "Larimar Port Ghalib",
    "Marsa Alam Real Estate",
    "Red Sea Luxury Resort",
    "Port Ghalib Property",
    "Larimar Villas",
    "Larimar Suites",
    "Larimar 3",
  ],
  authors: [{ name: "Mohamed Sharawi" }],
  openGraph: {
    title: "Mohamed Sharawi | Sales Supervisor | Larimar Port Ghalib",
    description: "Exclusive residential resort community in Port Ghalib, Marsa Alam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${spaceGrotesk.variable} antialiased bg-[#FAF8F5] text-[#1C1917]`}
      >
        {children}
      </body>
    </html>
  );
}
