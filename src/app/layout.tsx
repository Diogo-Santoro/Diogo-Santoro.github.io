import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
