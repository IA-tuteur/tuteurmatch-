import type { Metadata } from "next";
import { client } from "@/config/client";
import { objections } from "@/config/objections";
import { ObjectionsGrid } from "@/components/ObjectionsGrid";

export const metadata: Metadata = {
  title: `Questions fréquentes | ${client.name}`,
  description:
    "Les préoccupations les plus fréquentes des parents, répondues en vidéo par Mouad, fondateur de Tuteur Match.",
};

export default function ObjectionsPage() {
  return (
    <main>
      <section className="obj-hero">
        <div className="wrap wrap--narrow">
          <span className="eyebrow">Foire aux questions</span>
          <h1>
            Vos questions.{" "}
            <em className="hero__accent">Nos réponses.</em>
          </h1>
          <p className="obj-hero__lead">
            {client.spokesperson} répond aux préoccupations que la plupart
            des parents ont avant de nous confier leur enfant.
          </p>
        </div>
      </section>

      <section className="obj-grid-section">
        <div className="wrap">
          <ObjectionsGrid objections={objections} />
        </div>
      </section>

      <section className="obj-cta">
        <div className="wrap wrap--narrow">
          <span className="eyebrow">Prochaine étape</span>
          <h2>Prêt à en discuter avec nous&nbsp;?</h2>
          <p>
            Réservez votre consultation privée gratuite. On répondra à
            toutes vos questions spécifiques en 30 minutes.
          </p>
          <a href="/reserver" className="btn btn--lg">
            Réservez votre consultation gratuite{" "}
            <span className="arrow">&rarr;</span>
          </a>
          <p className="cta-micro">
            30 min · Gratuit · Aucun engagement
          </p>
        </div>
      </section>
    </main>
  );
}
