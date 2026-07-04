import { client } from "@/config/client";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-logo">{client.name}</div>
        <p className="footer-location">
          {client.tagline}
          <br />
          {client.location}
        </p>
        <p className="footer-contact">
          {[client.phone, client.email].filter(Boolean).join(" · ")}
        </p>
      </div>
    </footer>
  );
}
