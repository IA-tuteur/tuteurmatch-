import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero section--dark">
      <div className="wrap">
        <div className="hero__content">
          <span className="eyebrow">
            Mamans du Québec · Secondaire 4 SN
          </span>
          <h1 className="hero__h1">
            Ton enfant part en Secondaire 4{" "}
            <em className="hero__accent">Maths SN</em>{" "}
            en septembre. On garantit 90&nbsp;%+ au ministère, ou tu es
            remboursée.
          </h1>
          <p className="hero__sub">
            Regarde cette vidéo de 9 minutes avant de choisir ton
            créneau — tu vas savoir exactement comment on travaille,
            les résultats qu&apos;on a produits, et ce qu&apos;on garantit.
          </p>
        </div>

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

        <div className="stats-strip">
          {client.stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">
                {s.value}
                {s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
