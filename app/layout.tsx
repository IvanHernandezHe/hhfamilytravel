import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { config } from "@/content/config";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Mismos pesos que carga el prototipo del sitio (400/600/700): donde pide 500 se ve 400, como en el diseño.
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-figtree", display: "swap" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: { default: "HH Family Travel · Agencia de viajes para familias", template: "%s · HH Family Travel" },
  description: config.description,
  openGraph: {
    siteName: config.name,
    title: "HH Family Travel · Vacaciones en familia, planeadas con calma",
    description: "Viajes a la medida para familias. Cotiza por WhatsApp.",
    locale: "es_MX",
    type: "website",
    // 1200×630, fondo #04264D con logo-principal-oscuro.
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "HH Family Travel · Agencia de viajes para familias" }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }, { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: { url: "/brand/favicon-180.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = { themeColor: "#04264D", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: config.name,
  url: config.url,
  logo: `${config.url}/brand/logo-principal.png`,
  image: `${config.url}/brand/og.png`,
  description: config.description,
  telephone: "+" + config.whatsappNumber,
  email: config.email,
  address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressRegion: "Nuevo León", addressCountry: "MX" },
  areaServed: "MX",
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" }],
  sameAs: [config.instagram.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={figtree.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
          </>
        )}
        {PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}</Script>
        )}
      </body>
    </html>
  );
}
