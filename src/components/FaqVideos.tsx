import { client } from "@/config/client";
import { objections } from "@/config/objections";
import { ObjectionsGrid } from "@/components/ObjectionsGrid";

export function FaqVideos() {
  return (
    <section className="faq-videos" aria-labelledby="faq-videos-heading">
      <div className="wrap">
        <span className="eyebrow">Questions fréquentes</span>
        <h2 id="faq-videos-heading" className="faq-videos__title">
          Vos questions. <em className="hero__accent">Nos réponses.</em>
        </h2>
        <p className="faq-videos__lead">
          {client.spokesperson} répond aux préoccupations que la plupart des
          parents ont avant de nous confier leur enfant.
        </p>
        <ObjectionsGrid objections={objections} />
      </div>
    </section>
  );
}
