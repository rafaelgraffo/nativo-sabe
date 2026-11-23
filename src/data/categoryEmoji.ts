const categoryEmoji: Record<string, string> = {
  comer: "🍽️",
  "acai-sorvetes": "🍧",
  "pontos-turisticos": "🏖️",
  guias: "🧭",
  servicos: "🔧",
  comercio: "🛍️",
  passeios: "🚤",
};

export const getCategoryEmoji = (id: string) =>
  categoryEmoji[id] ?? "📍";
