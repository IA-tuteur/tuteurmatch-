import Image from "next/image";
import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents du Québec · Secondaire 4 SN
        </span>
        <h1 className="hero__h1">
          On garantit 90&nbsp;%+ à l&apos;examen du ministère en maths
          Secondaire 4 SN. Sinon, on continue gratuitement jusqu&apos;à des
          résultats satisfaisants.
        </h1>
        <p className="hero__sub">
          Sans devenir la police des devoirs chaque soir, on s&apos;occupe
          de tout, de la méthode jusqu&apos;aux résultats.
        </p>

        <figure className="hero__credential">
          <Image
            src="/logos/college-jean-de-brebeuf.png"
            alt="Collège Jean-de-Brébeuf"
            width={2674}
            height={679}
            priority
            className="hero__credential-logo"
          />
          <figcaption className="hero__credential-role">
            Enseignant au Collège
          </figcaption>
        </figure>

        <div className="hero__video">
          <div className="video-container">
            {client.vsl.embedUrl ? (
              <iframe
                src={`${client.vsl.embedUrl}?autoplay=1&mute=1`}
                title="Tuteur Match, Vidéo de présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">VIDÉO À VENIR</div>
            )}
          </div>
        </div>

        <div className="hero__cta">
          <div className="hero__actions">
            <a href="#calendrier" className="btn btn--lg">
              Réservez votre consultation gratuite{" "}
              <span className="arrow">&rarr;</span>
            </a>
            <a href="#temoignages" className="btn btn--lg btn--secondary">
              Voir les témoignages
            </a>
          </div>
          <p className="cta-micro">
            30 min · Gratuit · Aucun engagement
          </p>
        </div>

        <p className="hero__proof">
          94 % de réussite · 500+ élèves depuis 2022 · 4,9/5 sur Google
        </p>
      </div>
    </section>
  );
}
