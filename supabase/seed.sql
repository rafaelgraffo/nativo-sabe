-- Nativo Sabe — dados iniciais do catálogo.
-- Execute depois de schema.sql.

insert into public.categories (id, name, short_description, icon, sort_order) values
  ('comer', 'Onde comer', 'Café, almoço e jantar', 'Coffee', 1),
  ('acai-sorvetes', 'Açaí e sorvetes', 'Doce e refrescante', 'CupSoda', 2),
  ('pontos-turisticos', 'Pontos turísticos', 'O que vale conhecer', 'Camera', 3),
  ('guias', 'Guias locais', 'Quem conhece de verdade', 'Compass', 4),
  ('servicos', 'Serviços', 'Churrasqueiro, transfer e mais', 'Wrench', 5),
  ('comercio', 'Comércio local', 'Negócios da região', 'Store', 6),
  ('deposito-bebidas', 'Depósito de Bebidas', 'Bebidas para levar', 'Wine', 7),
  ('pescados-frutos-do-mar', 'Pescados e Frutos do Mar', 'Peixes, camarão e mais', 'Fish', 8)
on conflict (id) do update set
  name = excluded.name,
  short_description = excluded.short_description,
  icon = excluded.icon,
  sort_order = excluded.sort_order;

insert into public.places (id, name, category_id, kind, description, location, is_example, sort_order) values
  ('praia-barra-grande', 'Praia de Barra Grande', 'pontos-turisticos', 'Praia', 'Um dos destinos turísticos mais conhecidos de Cajueiro da Praia.', 'Barra Grande', false, 1),
  ('cajueiro-rei', 'Cajueiro-Rei', 'pontos-turisticos', 'Atração natural', 'Uma das referências naturais e turísticas do município.', 'Centro', false, 2),
  ('praia-barrinha', 'Praia da Barrinha', 'pontos-turisticos', 'Praia', 'Outra praia que faz parte do litoral do município.', 'Barrinha', false, 3),
  ('cafe-exemplo', 'Café da Praça', 'comer', 'Café da manhã', 'Exemplo de cafeteria local para a vitrine do guia.', 'Centro', true, 4),
  ('restaurante-exemplo', 'Restaurante do Cajueiro', 'comer', 'Almoço e jantar', 'Exemplo de restaurante com comida típica da região.', 'Centro', true, 5),
  ('acai-exemplo', 'Açaí da Barra', 'acai-sorvetes', 'Açaí', 'Exemplo de açaiteria para a vitrine do guia.', 'Barra Grande', true, 6),
  ('sorvete-exemplo', 'Sorvetes do Centro', 'acai-sorvetes', 'Sorveteria', 'Exemplo de sorveteria para a vitrine do guia.', 'Centro', true, 7),
  ('guia-exemplo', 'Guia local Cajueiro', 'guias', 'Passeios guiados', 'Exemplo de guia turístico nato da região.', 'Cajueiro da Praia', true, 8),
  ('churrasqueiro-exemplo', 'Churrasqueiro da Praia', 'servicos', 'Churrasqueiro', 'Exemplo de prestador de serviço local.', 'Barra Grande', true, 9),
  ('transfer-exemplo', 'Transfer Cajueiro', 'servicos', 'Transfer', 'Exemplo de serviço de transporte para visitantes.', 'Cajueiro da Praia', true, 10),
  ('camareira-exemplo', 'Camareira local', 'servicos', 'Camareira', 'Exemplo de serviço de limpeza e arrumação.', 'Centro', true, 11),
  ('motoboy-exemplo', 'Motoboy da Barra', 'servicos', 'Moto boy', 'Exemplo de entregas e recados pela região.', 'Barra Grande', true, 12),
  ('comercio-exemplo', 'Comércio do Centro', 'comercio', 'Loja local', 'Exemplo de negócio local para a vitrine do guia.', 'Centro', true, 13)
on conflict (id) do update set
  name = excluded.name,
  category_id = excluded.category_id,
  kind = excluded.kind,
  description = excluded.description,
  location = excluded.location,
  is_example = excluded.is_example,
  sort_order = excluded.sort_order;
