import type { Metadata } from "next";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: `Consultation confirmée | ${client.name}`,
  description:
    "Ta consultation privée gratuite est réservée. Regarde cette vidéo pour savoir à quoi t'attendre.",
};

export default function ThankYouPage() {
  const tyVideoUrl = "";

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
            Ta consultation est réservée.
          </h1>
          <p className="lead">
            Regarde cette courte vidéo, {client.spokesperson}{" "}
            t&apos;explique exactement comment te préparer
            pour ton appel.
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
            <strong>Vérifie ta boîte de réception</strong>
            <p>
              Un courriel de confirmation vient de t&apos;être envoyé avec
              les détails de ton appel. Si tu ne le vois pas, vérifie tes
              courriers indésirables.
            </p>
          </div>
        </div>
      </section>

      <section className="prep-section">
        <div className="wrap wrap--narrow">
          <h2>Prépare-toi pour ton appel</h2>
          <p className="prep-subtitle">
            Pour qu&apos;on puisse t&apos;aider au maximum en 30 minutes
          </p>
          <ol className="prep-steps">
            <li>
              <span className="prep-num" />
              <div>
                <strong>Le dernier bulletin de ton enfant</strong>
                <p>
                  Ses notes en maths nous permettent de cibler exactement
                  où il a besoin d&apos;aide.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Tes questions</strong>
                <p>
                  Note ce qui te préoccupe, on va y répondre directement
                  pendant l&apos;appel.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Un endroit calme</strong>
                <p>
                  L&apos;appel dure 30 minutes sur Google Meet. Assure-toi d&apos;être
                  disponible sans interruptions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="closing">
        <div className="wrap wrap--narrow">
          <h2>On a hâte de te parler.</h2>
          <p>
            Si tu as besoin de modifier ton créneau, utilise le lien dans
            ton courriel de confirmation.
          </p>
        </div>
      </section>
    </main>
  );
}
