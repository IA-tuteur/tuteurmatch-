import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents du Québec · Secondaire 4 SN
        </span>
        <h1 className="hero__h1">
          On <em className="hero__accent">garantit</em>{" "}
          90&nbsp;%+ à l&apos;examen du ministère en maths Secondaire 4 SN, ou c&apos;est remboursé.
        </h1>
        <p className="hero__sub">
          Sans devenir la police des devoirs chaque soir, on s&apos;occupe
          de tout, de la méthode jusqu&apos;aux résultats.
        </p>

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
          <a href="#calendrier" className="btn btn--lg">
            Réservez votre consultation gratuite{" "}
            <span className="arrow">&rarr;</span>
          </a>
          <p className="cta-micro">
            30 min · Google Meet · Gratuit · Aucun engagement
          </p>
        </div>

        <p className="hero__proof">
          94 % de réussite · 500+ élèves depuis 2022 · 4,9/5 sur Google
        </p>
      </div>
    </section>
  );
}
