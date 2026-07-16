import { client } from "@/config/client";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-name">{client.name}</div>
        <p className="footer-detail">
          {client.tagline} · {client.location}
        </p>
        {(client.phone || client.email) && (
          <p className="footer-detail">
            {[client.phone, client.email].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </footer>
  );
}
