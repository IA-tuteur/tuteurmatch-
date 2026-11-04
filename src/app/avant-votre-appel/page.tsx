import type { Metadata } from "next";
import Image from "next/image";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";
import { ObjectionsGrid } from "@/components/ObjectionsGrid";
import { client } from "@/config/client";
import { objections } from "@/config/objections";

export const metadata: Metadata = {
  title: `Avant votre appel | ${client.name}`,
  description:
    "Voici tout ce que vous devez savoir avant notre appel.",
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

const roadmap = [
  {
    when: "30 min",
    title: "L'appel",
    text: "On fait connaissance et on regarde où en est votre enfant.",
  },
  {
    title: "Diagnostic",
    text: "On trouve ce qui bloque vraiment : habitudes, lacunes, stress.",
  },
  {
    title: "Méthode de travail",
    text: "On lui donne une façon de travailler qui marche, à chaque examen.",
  },
  {
    title: "Accompagnement et autonomie",
    text: "Groupe et individuel. On ajuste selon ses résultats, jusqu'à ce qu'il avance seul.",
  },
  {
    title: "L'examen du ministère",
    text: "Il arrive prêt, autonome, et vise 90\u00a0%+.",
  },
];

export default function AvantVotreAppelPage() {
  const vslId = youtubeId(client.vsl.embedUrl);

  return (
    <main className="precall">
      <section className="precall-hero">
        <div className="wrap wrap--narrow">
          <h1>Voici tout ce que vous devez savoir avant notre appel</h1>

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
          <h2>Comment ça fonctionne</h2>
          <div className="precall-vsl">
            <ClickToPlayVideo
              videoId={vslId}
              title="Tuteur Match, Vidéo de présentation"
            />
          </div>
        </div>
      </section>

      <section className="precall-section precall-road-section">
        <div className="wrap">
          <h2>Le parcours</h2>
          <ol className="precall-road">
            {roadmap.map((step, index) => (
              <li key={step.title}>
                <span className="precall-road__num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>
                    {step.title}
                    {step.when ? (
                      <span className="precall-road__when">{step.when}</span>
                    ) : null}
                  </h3>
                  <p className="precall-road__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="precall-road__guarantee">
            Sinon, on continue gratuitement jusqu&apos;à des résultats
            satisfaisants.
          </p>
        </div>
      </section>

      <section
        className="precall-section precall-section--ground"
        id="temoignages"
      >
        <div className="wrap">
          <h2>Ce que les autres parents disent</h2>
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

      <section className="precall-section precall-section--surface">
        <div className="wrap">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>Toutes les questions qu&apos;on nous pose avant l&apos;appel, répondues</h2>
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
