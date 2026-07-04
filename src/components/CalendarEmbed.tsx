"use client";

import Script from "next/script";
import { client } from "@/config/client";

export function CalendarEmbed() {
  const calId = client.ghl.calendarId;

  return (
    <section id="calendrier" className="calendar-section section--cream">
      <div className="wrap">
        <div className="calendar-card">
          <div className="calendar-header">
            <h3>Choisis ton créneau de consultation privée</h3>
            <p>Sélectionne une date et une heure qui te conviennent.</p>
            <div className="calendar-trust">
              <span>
                <span className="calendar-dot" /> 20 à 30 min
              </span>
              <span>
                <span className="calendar-dot" /> Gratuit
              </span>
              <span>
                <span className="calendar-dot" /> Aucun engagement
              </span>
            </div>
          </div>
          <div className="calendar-slot">
            <iframe
              src={`https://api.leadconnectorhq.com/widget/booking/${calId}`}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id={`cal_${calId}`}
              title="Réserver un appel"
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
