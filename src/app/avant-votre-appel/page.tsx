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
    needsProof: false,
    title: "L'appel",
    text: "On fait le point sur la situation scolaire de votre enfant, on identifie ce qui le bloque et on vous présente notre approche. La rencontre a lieu sur Google Meet.",
  },
  {
    when: "PROOF NEEDED",
    needsProof: true,
    title: "La Méthode TM",
    text: "On s'occupe de tout, de la méthode jusqu'aux résultats. Votre enfant suit la Méthode TM.",
  },
  {
    when: "PROOF NEEDED",
    needsProof: true,
    title: "L'examen du ministère",
    text: "L'objectif est 90 %+ à l'examen du ministère en maths Secondaire 4 SN.",
  },
  {
    when: "Jusqu'à des résultats satisfaisants",
    needsProof: false,
    title: "On continue, gratuitement",
    text: "Si votre enfant suit la Méthode TM et n'obtient pas 90 %+, on continue gratuitement jusqu'à des résultats satisfaisants.",
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

      <section className="precall-section precall-section--surface">
        <div className="wrap wrap--narrow">
          <h2>De l&apos;appel aux résultats</h2>
          <ol className="precall-road">
            {roadmap.map((step, index) => (
              <li key={step.title}>
                <span className="precall-road__num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <p
                    className={
                      step.needsProof
                        ? "precall-road__when precall-road__when--missing"
                        : "precall-road__when"
                    }
                  >
                    {step.when}
                  </p>
                  <h3>{step.title}</h3>
                  <p className="precall-road__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
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
