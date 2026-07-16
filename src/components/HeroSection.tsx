import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents du Québec · Secondaire 4 SN
        </span>
        <h1 className="hero__h1">
          Et si la note à l&apos;examen du ministère était{" "}
          <em className="hero__accent">déjà réglée</em>?
        </h1>
        <p className="hero__sub">
          On garantit 90&nbsp;%+ en maths SN — ou c&apos;est remboursé.
          Cette vidéo de 9 minutes t&apos;explique comment.
        </p>

        <div className="hero__video">
          <div className="video-container">
            {client.vsl.embedUrl ? (
              <iframe
                src={client.vsl.embedUrl}
                title="Tuteur Match — Vidéo de présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">VIDÉO À VENIR</div>
            )}
          </div>
        </div>

        <div className="hero__cta">
          <a href="#calendrier" className="btn btn--lg">
            Réserver ma consultation gratuite{" "}
            <span className="arrow">&rarr;</span>
          </a>
          <p className="cta-micro">
            20 à 30 min · Gratuit · Aucun engagement
          </p>
        </div>

        <p className="hero__proof">
          94 % de réussite · 500+ élèves depuis 2022 · 4,9/5 sur Google
        </p>
      </div>
    </section>
  );
}
