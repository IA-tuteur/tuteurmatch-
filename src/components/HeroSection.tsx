import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero-main section--navy">
      <div className="wrap">
        <div className="hero-main__content">
          <span className="eyebrow hero-eyebrow">
            Mamans du Québec · Secondaire 4 SN
          </span>
          <h1 className="hero-main__h1">
            Ton enfant part en Secondaire 4{" "}
            <em className="hero-main__accent">Maths SN</em>{" "}
            en septembre. On garantit 90&nbsp;% + à l&apos;examen du
            ministère, ou tu es remboursée.
          </h1>
          <p className="hero-main__sub">
            Regarde cette vidéo de 9 minutes avant de choisir ton créneau —
            tu vas savoir exactement comment on travaille, ce qu&apos;on a
            produit comme résultats, et ce qu&apos;on garantit.
          </p>
        </div>

        <div className="hero-main__video">
          <div className="video-container">
            {client.vsl.embedUrl ? (
              <iframe
                src={client.vsl.embedUrl}
                title="Tuteur Match – Vidéo de présentation privée"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">VIDÉO À VENIR</div>
            )}
          </div>
        </div>

        <div className="hero-main__cta">
          <a href="#calendrier" className="btn btn--gold btn--lg">
            Choisir mon créneau de consultation{" "}
            <span className="arrow">&rarr;</span>
          </a>
          <p
            className="cta-micro"
            style={{ color: "rgba(250,249,247,.55)", marginTop: "12px" }}
          >
            Gratuit. Confidentiel. Aucun engagement.
          </p>
        </div>

        <div className="stats-strip hero-main__stats">
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
