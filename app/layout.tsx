import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { seo, site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${seo.title} · Acrylic Paint Store in India`,
    template: `%s · ${site.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${seo.title} · Acrylic Paint Store in India`,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-sans), Outfit, sans-serif",
          ["--serif" as string]: "var(--font-serif), Cormorant Garamond, serif",
        }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HWF205MHX6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWF205MHX6');
          `}
        </Script>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ArtGallery", "Store"],
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: `+${site.whatsappNumber}`,
              description: seo.description,
              keywords: seo.keywords.join(", "),
              address: {
                "@type": "PostalAddress",
                addressLocality: site.city,
                addressCountry: "IN",
              },
              areaServed: [site.city, site.country],
            }),
          }}
        />
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
