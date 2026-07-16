import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents du Québec · Secondaire 4 SN
        </span>
        <h1 className="hero__h1">
          90&nbsp;%+ à l&apos;examen du ministère en maths SN.{" "}
          <em className="hero__accent">Garanti</em>, ou remboursé.
        </h1>
        <p className="hero__sub">
          Sans devenir la police des devoirs chaque soir.
          On prend en charge la réussite de ton enfant en maths
          Secondaire 4 SN — regarde cette vidéo de 9 minutes
          pour comprendre comment.
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
