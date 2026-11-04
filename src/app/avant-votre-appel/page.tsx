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
    text: "On fait le point sur la situation scolaire de votre enfant, on identifie ce qui le bloque et on vous présente notre approche.",
  },
  {
    title: "Diagnostic",
    text: "On commence par ses habitudes de vie (sommeil, routine, environnement de travail), puis on identifie ses lacunes précises. Résultat : un plan ciblé sur sa vraie réalité, pas un programme générique.",
  },
  {
    title: "Méthode de travail",
    text: "On installe un système prédictible : comment réviser, aborder un problème inédit, gérer le stress et organiser son temps sur plusieurs mois. C'est ce qui débloque les situations-problèmes.",
  },
  {
    when: "2 + 1 par semaine",
    title: "Accompagnement",
    text: "2 séances de groupe + 1 séance individuelle par semaine. On teste et on adapte le système à lui, jusqu'à ce qu'il puisse étudier seul, efficacement.",
  },
  {
    title: "Autonomie",
    text: "On réduit progressivement la supervision à mesure que sa confiance et ses résultats augmentent. Il sait quoi faire, et dans quel ordre.",
  },
  {
    when: "90\u00a0%+",
    title: "L'examen du ministère",
    text: "90\u00a0%+ en maths Sec\u00a04\u00a0SN, avec une autonomie qui ne dépend de personne. Sinon, on continue gratuitement jusqu'à des résultats satisfaisants, si votre enfant met l'effort et suit la Méthode TM.",
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
          <h2>Le parcours vers 90&nbsp;%+ et l&apos;autonomie</h2>
          <ol className="precall-road">
            {roadmap.map((step, index) => (
              <li key={step.title}>
                <span className="precall-road__num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  {step.when ? (
                    <p className="precall-road__when">{step.when}</p>
                  ) : null}
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
