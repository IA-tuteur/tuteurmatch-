import { client } from "@/config/client";

export function GuaranteeBanner() {
  return (
    <section className="guarantee-banner section--cream">
      <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
        <span className="eyebrow guarantee-eyebrow">Notre garantie</span>
        <p className="guarantee-banner__text">{client.guarantee}</p>
        <p className="guarantee-banner__note">
          Pas de conditions cachées. Si on ne livre pas le résultat, on
          rembourse.
        </p>
      </div>
    </section>
  );
}
