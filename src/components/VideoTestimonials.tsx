import { client } from "@/config/client";

export function VideoTestimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <h2 className="testimonials__title">
          Des parents. Des résultats.
        </h2>
        <div className="testimonials__grid">
          {client.testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="video-container">
                {t.videoUrl ? (
                  <iframe
                    src={t.videoUrl}
                    title={`Témoignage de ${t.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="video-placeholder">
                    TÉMOIGNAGE À VENIR
                  </div>
                )}
              </div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <p className="testimonial-card__author">
                <strong>{t.name}</strong>, {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
