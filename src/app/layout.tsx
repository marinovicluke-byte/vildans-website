import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookingButton } from "@/components/layout/StickyBookingButton";
import "@/styles/globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.intelligentlehealing.com"),
  title: {
    default: "Intelligentle Healing | Kinesiology Bentleigh & Moorabbin Melbourne",
    template: "%s | Intelligentle Healing",
  },
  description:
    "PKP Kinesiology for adults carrying stress, anxiety, and tension. Muscle monitoring finds where your body holds it. Moorabbin, Melbourne.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Intelligentle Healing",
    url: "https://www.intelligentlehealing.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <StickyBookingButton />
      </body>
    </html>
  );
}
