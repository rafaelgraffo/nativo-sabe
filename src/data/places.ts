import {
  Camera,
  Coffee,
  Compass,
  CupSoda,
  Fish,
  Store,
  Wine,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type CategoryId =
  | "comer"
  | "acai-sorvetes"
  | "pontos-turisticos"
  | "guias"
  | "servicos"
  | "comercio"
  | "deposito-bebidas"
  | "pescados-frutos-do-mar";

export type Category = {
  id: CategoryId;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
};

export type Place = {
  id: string;
  name: string;
  category: CategoryId;
  kind: string;
  description: string;
  location: string;
  contact?: string;
  isExample?: boolean;
};

export const categories: Category[] = [
  {
    id: "comer",
    name: "Onde comer",
    shortDescription: "Café, almoço e jantar",
    icon: Coffee,
  },
  {
    id: "acai-sorvetes",
    name: "Açaí e sorvetes",
    shortDescription: "Doce e refrescante",
    icon: CupSoda,
  },
  {
    id: "pontos-turisticos",
    name: "Pontos turísticos",
    shortDescription: "O que vale conhecer",
    icon: Camera,
  },
  {
    id: "guias",
    name: "Guias locais",
    shortDescription: "Quem conhece de verdade",
    icon: Compass,
  },
  {
    id: "servicos",
    name: "Serviços",
    shortDescription: "Churrasqueiro, transfer e mais",
    icon: Wrench,
  },
  {
    id: "comercio",
    name: "Comércio local",
    shortDescription: "Negócios da região",
    icon: Store,
  },
  {
    id: "deposito-bebidas",
    name: "Depósito de Bebidas",
    shortDescription: "Bebidas para levar",
    icon: Wine,
  },
  {
    id: "pescados-frutos-do-mar",
    name: "Pescados e Frutos do Mar",
    shortDescription: "Peixes, camarão e mais",
    icon: Fish,
  },
];

export const places: Place[] = [
  {
    id: "praia-barra-grande",
    name: "Praia de Barra Grande",
    category: "pontos-turisticos",
    kind: "Praia",
    description:
      "Um dos destinos turísticos mais conhecidos de Cajueiro da Praia.",
    location: "Barra Grande",
  },
  {
    id: "cajueiro-rei",
    name: "Cajueiro-Rei",
    category: "pontos-turisticos",
    kind: "Atração natural",
    description:
      "Uma das referências naturais e turísticas do município.",
    location: "Centro",
  },
  {
    id: "praia-barrinha",
    name: "Praia da Barrinha",
    category: "pontos-turisticos",
    kind: "Praia",
    description: "Outra praia que faz parte do litoral do município.",
    location: "Barrinha",
  },
  {
    id: "cafe-exemplo",
    name: "Café da Praça",
    category: "comer",
    kind: "Café da manhã",
    description: "Exemplo de cafeteria local para a vitrine do guia.",
    location: "Centro",
    isExample: true,
  },
  {
    id: "restaurante-exemplo",
    name: "Restaurante do Cajueiro",
    category: "comer",
    kind: "Almoço e jantar",
    description: "Exemplo de restaurante com comida típica da região.",
    location: "Centro",
    isExample: true,
  },
  {
    id: "acai-exemplo",
    name: "Açaí da Barra",
    category: "acai-sorvetes",
    kind: "Açaí",
    description: "Exemplo de açaiteria para a vitrine do guia.",
    location: "Barra Grande",
    isExample: true,
  },
  {
    id: "sorvete-exemplo",
    name: "Sorvetes do Centro",
    category: "acai-sorvetes",
    kind: "Sorveteria",
    description: "Exemplo de sorveteria para a vitrine do guia.",
    location: "Centro",
    isExample: true,
  },
  {
    id: "guia-exemplo",
    name: "Guia local Cajueiro",
    category: "guias",
    kind: "Passeios guiados",
    description: "Exemplo de guia turístico nato da região.",
    location: "Cajueiro da Praia",
    isExample: true,
  },
  {
    id: "churrasqueiro-exemplo",
    name: "Churrasqueiro da Praia",
    category: "servicos",
    kind: "Churrasqueiro",
    description: "Exemplo de prestador de serviço local.",
    location: "Barra Grande",
    isExample: true,
  },
  {
    id: "transfer-exemplo",
    name: "Transfer Cajueiro",
    category: "servicos",
    kind: "Transfer",
    description: "Exemplo de serviço de transporte para visitantes.",
    location: "Cajueiro da Praia",
    isExample: true,
  },
  {
    id: "camareira-exemplo",
    name: "Camareira local",
    category: "servicos",
    kind: "Camareira",
    description: "Exemplo de serviço de limpeza e arrumação.",
    location: "Centro",
    isExample: true,
  },
  {
    id: "motoboy-exemplo",
    name: "Motoboy da Barra",
    category: "servicos",
    kind: "Moto boy",
    description: "Exemplo de entregas e recados pela região.",
    location: "Barra Grande",
    isExample: true,
  },
  {
    id: "comercio-exemplo",
    name: "Comércio do Centro",
    category: "comercio",
    kind: "Loja local",
    description: "Exemplo de negócio local para a vitrine do guia.",
    location: "Centro",
    isExample: true,
  },
];

export const categoryName = (id: CategoryId) =>
  categories.find((category) => category.id === id)?.name ?? "Todos";

export const getCategory = (id: string) =>
  categories.find((category) => category.id === id);

export const getPlace = (id: string) =>
  places.find((place) => place.id === id);
