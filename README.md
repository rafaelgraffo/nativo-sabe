# Nativo Sabe

**🌐 Acesse o site:** https://rafaelgraffo.github.io/nativo-sabe/

A ideia do Nativo Sabe surgiu de uma verdade simples: ninguém conhece um lugar melhor do que quem vive nele. São os moradores locais que guardam os melhores segredos sobre onde comer, se hospedar e o que explorar. Criamos a ponte entre a experiência de quem é da casa e a vontade de descobrir de quem visita.

Guia local de Cajueiro da Praia, Piauí: praias, comida, passeios e comércio local.

## Tecnologias

- React 19
- TypeScript 7
- Vite 8
- Lucide React (ícones)
- qrcode.react (QR Code do Pix)
- Oxlint
- GitHub Pages + GitHub Actions (deploy)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.tsx` — página principal, seções e filtros
- `src/data/places.ts` — categorias e lugares de exemplo
- `src/data/donation.ts` — chave e código Pix (preencher antes de publicar)
- `src/components/DonationSection.tsx` — área de donativos
- `src/App.css` — estilos e responsividade
- `public/imagens/` — logos e foto do herói

## Como está organizado

- **Categorias** é o índice: mostra os tipos de lugar e serviço.
- **Explorar** são os resultados: lugares filtrados por categoria e busca.
- **Apoiar** traz o donativo via Pix (copia e cola + QR Code).

O guia é gratuito para visitantes e prestadores de serviço.

## Estado atual

Site estático com dados de exemplo. Busca e filtros funcionam localmente.

## Próximos passos

- Preencher a chave e o código Pix em `src/data/donation.ts`
- Ligar os lugares a uma API/fonte de dados real
- Cadastro e validação de negócios locais
- Formulário de contato e envio de sugestões
- No futuro: aluguel e hospedagem estilo Airbnb (serviço pago)
- Domínio próprio
