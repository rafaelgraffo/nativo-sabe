import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { asset } from "../utils/asset";

export function AboutPage() {
  return (
    <main className="inner-page about-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <section className="about">
        <div>
          <span className="eyebrow">A IDEIA DO NATIVO SABE</span>

          <h2>Ninguém conhece um lugar melhor do que quem vive nele.</h2>

          <p>
            São os moradores locais que guardam os melhores segredos sobre
            onde comer, onde ficar e o que explorar. Criamos a ponte entre a
            experiência de quem é da casa e a vontade de descobrir de quem
            visita.
          </p>

          <p>
            Foi a partir desse pensamento que o Nativo Sabe nasceu — feito
            por nativos, com o objetivo de divulgar e dinamizar o turismo
            local. O nosso projeto é mantido por donativos voluntários: se,
            de alguma forma, ele está a ser útil para ti, morador ou
            comerciante da região, ou para ti que nos estás a visitar,
            deixamos aqui o convite e o incentivo para doar e ajudar a manter
            a iniciativa viva.
          </p>

          <p>
            É motivo de muita alegria para nós, Rafael e Túlio, termos criado
            este projeto que há muito tempo se fazia necessário.
          </p>

          <p>
            A nossa embaixadora é a Dona Neda, da Barraca da Nêda — artesã
            renomada e figura queridíssima de Cajueiro, no Instagram{" "}
            <a
              className="about-link"
              href="https://www.instagram.com/barracadaneda/"
              target="_blank"
              rel="noreferrer"
            >
              @barracadaneda
            </a>
            .
          </p>

          <p>Muito obrigado pela tua visita. Volta sempre!</p>
        </div>

        <div className="about-mark">
          <img
            className="about-mark-image"
            src={asset("imagens/Nativo_manja.jpg")}
            alt="Nativo Sabe — quem é daqui, sabe"
          />
          <strong>Quem é daqui, sabe.</strong>
        </div>
      </section>
    </main>
  );
}
