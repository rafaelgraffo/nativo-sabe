-- Nativo Sabe — schema inicial do catálogo
-- Projeto Supabase exclusivo do Nativo Sabe (nenhuma relação com Palco Angola).

create table if not exists public.categories (
  id text primary key,
  name text not null,
  short_description text not null,
  icon text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.places (
  id text primary key,
  name text not null,
  category_id text not null references public.categories(id) on update cascade,
  kind text not null,
  description text not null,
  location text not null,
  contact text,
  is_example boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists places_category_id_idx on public.places(category_id);
create index if not exists places_location_idx on public.places(location);

alter table public.categories enable row level security;
alter table public.places enable row level security;

-- Leitura pública: o site pode consultar o catálogo sem autenticação.
-- Não há política de INSERT/UPDATE/DELETE para anon/authenticated.
drop policy if exists "Leitura publica de categorias" on public.categories;
create policy "Leitura publica de categorias"
  on public.categories for select
  to anon, authenticated
  using (true);

drop policy if exists "Leitura publica de lugares" on public.places;
create policy "Leitura publica de lugares"
  on public.places for select
  to anon, authenticated
  using (true);
