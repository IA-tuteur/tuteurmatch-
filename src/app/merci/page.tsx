import type { Metadata } from "next";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: `Consultation confirmée | ${client.name}`,
  description:
    "Votre consultation privée gratuite est réservée. Regardez cette vidéo pour savoir à quoi vous attendre.",
};

export default function ThankYouPage() {
  const tyVideoUrl = "https://www.youtube.com/embed/3XE7FQIU880?autoplay=1&mute=1";

  return (
    <main>
      <section className="ty-hero">
        <div className="wrap wrap--narrow">
          <div className="ty-check">
            <svg viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1>
            Votre consultation est réservée.
          </h1>
          <p className="lead">
            Regardez cette courte vidéo, {client.spokesperson}{" "}
            vous explique exactement comment vous préparer
            pour votre appel.
          </p>

          <div className="ty-video">
            <div className="video-container">
              {tyVideoUrl ? (
                <iframe
                  src={tyVideoUrl}
                  title="Prochaines étapes, Tuteur Match"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">VIDÉO À VENIR</div>
              )}
            </div>
          </div>

          <div className="email-alert">
            <strong>Vérifiez votre boîte de réception</strong>
            <p>
              Un courriel de confirmation vient de vous être envoyé avec
              les détails de votre appel. Si vous ne le voyez pas, vérifiez vos
              courriers indésirables.
            </p>
          </div>
        </div>
      </section>

      <section className="prep-section">
        <div className="wrap wrap--narrow">
          <h2>Préparez-vous pour votre appel</h2>
          <p className="prep-subtitle">
            Pour qu&apos;on puisse vous aider au maximum en 30 minutes
          </p>
          <ol className="prep-steps">
            <li>
              <span className="prep-num" />
              <div>
                <strong>Le dernier bulletin de votre enfant</strong>
                <p>
                  Ses notes en maths nous permettent de cibler exactement
                  où il a besoin d&apos;aide.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Vos questions</strong>
                <p>
                  Notez ce qui vous préoccupe, on va y répondre directement
                  pendant l&apos;appel.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Un endroit calme</strong>
                <p>
                  L&apos;appel dure 30 minutes sur Google Meet. Assurez-vous d&apos;être
                  disponible sans interruptions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="closing">
        <div className="wrap wrap--narrow">
          <h2>On a hâte de vous parler.</h2>
          <p>
            Si vous avez besoin de modifier votre créneau, utilisez le lien dans
            votre courriel de confirmation.
          </p>
        </div>
      </section>
    </main>
  );
}
