import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Tuteur Match | 90%+ garanti à l'examen du ministère en maths Sec 4 SN",
  description:
    "On garantit que votre enfant atteindra 90%+ à l'examen du ministère en maths Secondaire 4 SN, ou vous êtes remboursé. Regardez la vidéo et réservez votre consultation privée gratuite.",
  openGraph: {
    title:
      "Tuteur Match | 90%+ garanti à l'examen du ministère en maths Sec 4 SN",
    description:
      "Réservez votre consultation privée gratuite pour la réussite de votre enfant en maths.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1344493910518283');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1344493910518283&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <div className="top-bar">
          <a href="#calendrier">
            Réservez votre consultation gratuite sur Google Meet &rarr;
          </a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
