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
  const isDev = process.env.NODE_ENV === "development";
  // Strict CSP configuration:
  // - default-src: only self
  // - script-src: self + unsafe-inline (Next.js requires inline scripts for hydration) + unsafe-eval for dev (Next.js HMR)
  // - style-src: self + unsafe-inline (Next.js global styles require this currently without nonces)
  // - object-src: none (disables Flash/PDF plugins)
  // - base-uri: self (prevents base tag hijacking)
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' data:;
    connect-src 'self' https:;
    object-src 'none';
    base-uri 'self';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
