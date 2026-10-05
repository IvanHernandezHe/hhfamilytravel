import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import CtaBand from "@/components/CtaBand";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { themeInitScript } from "@/components/ThemeToggle";
import { site } from "@/config/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Agencia de viajes para familias`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "es_MX",
    type: "website",
    // 1200×630, fondo #04264D con logo-principal-oscuro centrado.
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: `${site.name} · Agencia de viajes para familias` }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/brand/favicon-180.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#04264D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={figtree.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <Header />
        <main className="mx-auto max-w-[1240px] px-4 sm:px-8">
          {children}
          <CtaBand />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
