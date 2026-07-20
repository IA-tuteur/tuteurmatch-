import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: `Réserver un appel | ${client.name}`,
  description:
    "Réserve ta consultation privée gratuite de 30 minutes avec l'équipe Tuteur Match.",
};

export default function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-topbar">
        <div className="wrap">
          <div className="booking-topbar__name">{client.name}</div>
          <div className="booking-topbar__sub">
            Consultation privée gratuite · {client.subject}
          </div>
        </div>
      </div>
      <div className="booking-main">
        <CalendarEmbed />
      </div>
    </div>
  );
}
