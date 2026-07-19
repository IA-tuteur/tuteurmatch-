import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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
    "On garantit que ton enfant atteindra 90%+ à l'examen du ministère en maths Secondaire 4 SN, ou tu es remboursé. Regarde la vidéo et réserve ta consultation privée gratuite.",
  openGraph: {
    title:
      "Tuteur Match | 90%+ garanti à l'examen du ministère en maths Sec 4 SN",
    description:
      "Réserve ta consultation privée gratuite pour la réussite de ton enfant en maths.",
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
        <div className="top-bar">
          <a href="#calendrier">
            Réserve ta consultation gratuite maintenant &rarr;
          </a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
