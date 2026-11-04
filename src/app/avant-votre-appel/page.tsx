import type { Metadata } from "next";
import Image from "next/image";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";
import { ObjectionsGrid } from "@/components/ObjectionsGrid";
import { client } from "@/config/client";
import { objections } from "@/config/objections";

export const metadata: Metadata = {
  title: `Avant votre appel | ${client.name}`,
  description:
    "Votre consultation est confirmée. Regardez ces vidéos avant notre appel.",
  robots: {
    index: false,
    follow: false,
  },
};

function youtubeId(embedUrl: string) {
  return embedUrl.split("/embed/")[1]?.split(/[?&]/)[0] ?? "";
}

const callPoints = [
  "Faire le point sur la situation scolaire de votre enfant",
  "Identifier ce qui le bloque",
  "Vous présenter notre approche",
];

export default function AvantVotreAppelPage() {
  const vslId = youtubeId(client.vsl.embedUrl);

  return (
    <main className="precall">
      <section className="precall-hero">
        <div className="wrap wrap--narrow">
          <h1>Votre consultation est confirmée</h1>
          <p className="precall-hero__lead">
            Regardez ces vidéos avant notre appel.
          </p>

          <figure className="hero__credential">
            <Image
              src="/logos/college-jean-de-brebeuf.png"
              alt="Collège Jean-de-Brébeuf"
              width={2674}
              height={679}
              className="hero__credential-logo"
            />
            <figcaption className="hero__credential-role">
              {client.spokesperson} · Enseignant au Collège
            </figcaption>
          </figure>

          <ol className="precall-points">
            {callPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
          <p className="precall-note">
            Prévoyez que votre enfant soit disponible.
          </p>
        </div>
      </section>

      <section className="precall-section precall-section--ground">
        <div className="wrap">
          <h2>Étape 1. La présentation</h2>
          <div className="precall-vsl">
            <ClickToPlayVideo
              videoId={vslId}
              title="Tuteur Match, Vidéo de présentation"
            />
          </div>
        </div>
      </section>

      <section
        className="precall-section precall-section--surface"
        id="temoignages"
      >
        <div className="wrap">
          <h2>Étape 2. Ce que les parents en disent</h2>
          <div className="testimonials__grid">
            {client.testimonials.map((t) => (
              <article key={t.name} className="testimonial-card">
                <ClickToPlayVideo
                  videoId={youtubeId(t.videoUrl)}
                  title={`Témoignage de ${t.name}`}
                />
                <p className="testimonial-card__author">
                  <strong>{t.name}</strong>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="precall-section precall-section--ground">
        <div className="wrap">
          <h2>Étape 3. Vos questions, répondues</h2>
          <ObjectionsGrid objections={objections} />
        </div>
      </section>

      <section className="precall-close">
        <div className="wrap wrap--narrow">
          <span className="eyebrow">Notre garantie</span>
          <p className="guarantee__text">{client.guarantee}</p>
          <p className="precall-close__sign">
            À très bientôt&nbsp;! — {client.spokesperson}
          </p>
        </div>
      </section>
    </main>
  );
}
