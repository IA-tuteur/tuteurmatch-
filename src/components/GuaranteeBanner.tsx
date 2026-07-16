import { client } from "@/config/client";

export function GuaranteeBanner() {
  return (
    <section className="guarantee">
      <div className="wrap wrap--narrow">
        <span className="eyebrow">Notre garantie</span>
        <p className="guarantee__text">{client.guarantee}</p>
        <p className="guarantee__note">
          Pas de conditions cachées. Si on ne livre pas, on rembourse.
        </p>
      </div>
    </section>
  );
}
