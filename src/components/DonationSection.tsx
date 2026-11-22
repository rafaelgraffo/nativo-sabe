import { useState } from "react";
import { Check, Copy, Heart } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { PIX_COPY_PASTE, PIX_KEY, pixConfigured } from "../data/donation";

export function DonationSection() {
  const [copied, setCopied] = useState(false);

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_COPY_PASTE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="donation section" id="apoiar">
      <div className="donation-content">
        <span className="eyebrow">
          <Heart size={14} /> APOIE O PROJETO
        </span>

        <h2>Ajude a manter o Nativo Sabe gratuito.</h2>

        <p>
          O guia é gratuito para quem visita e para quem presta serviço. Se
          você acha que isso faz bem para Cajueiro da Praia, pode contribuir
          com qualquer valor via Pix.
        </p>

        {pixConfigured ? (
          <>
            <div className="pix-actions">
              <button className="pix-button" type="button" onClick={copyPix}>
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Código copiado!" : "Copiar código Pix"}
              </button>
              <span className="pix-key">{PIX_KEY}</span>
            </div>
            <div className="pix-qr">
              <QRCodeSVG value={PIX_COPY_PASTE} size={148} level="M" />
              <span>Ou escaneie o QR Code</span>
            </div>
          </>
        ) : (
          <p className="pix-pending">
            Os dados do Pix serão disponibilizados em breve.
          </p>
        )}
      </div>
    </section>
  );
}
