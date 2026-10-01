import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

// Optimize fonts by loading them through next/font/google instead of a render-blocking CSS import
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Diogo Santoro — Software Developer",
    template: "%s | Diogo Santoro",
  },
  description:
    "Portfolio of Diogo Santoro — Software Developer specializing in Java, TypeScript, React, and DevOps. Based in Vigo, Spain.",
  keywords: [
    "Diogo Santoro",
    "Software Developer",
    "Java",
    "TypeScript",
    "React",
    "Spring Boot",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Diogo Santoro" }],
  openGraph: {
    title: "Diogo Santoro — Software Developer",
    description:
      "Portfolio of Diogo Santoro — Software Developer specializing in Java, TypeScript, React, and DevOps.",
    type: "website",
    locale: "en_US",
    siteName: "Diogo Santoro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diogo Santoro — Software Developer",
    description:
      "Portfolio of Diogo Santoro — Software Developer specializing in Java, TypeScript, React, and DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
