"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { tiposDeViaje, type Destino, type TipoDeViaje } from "@/content/destinos";
import Photo from "./Photo";

type Filtro = "Todos" | TipoDeViaje;
const filtros: Filtro[] = ["Todos", ...tiposDeViaje];

function filtroDeUrl(): Filtro {
  const tipo = new URLSearchParams(window.location.search).get("tipo");
  return filtros.includes(tipo as Filtro) ? (tipo as Filtro) : "Todos";
}

export default function DestinosGrid({ destinos }: { destinos: Destino[] }) {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  // Aplica ?tipo= al cargar y al navegar desde Inicio con otro tipo.
  useEffect(() => {
    setFiltro(filtroDeUrl());
    const onPop = () => setFiltro(filtroDeUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const visibles = destinos.filter((d) => filtro === "Todos" || d.type === filtro);

  function elegir(f: Filtro) {
    setFiltro(f);
    // Mantiene la URL compartible sin recargar la página.
    const url = f === "Todos" ? window.location.pathname : `${window.location.pathname}?tipo=${f}`;
    window.history.replaceState(window.history.state, "", url);
  }

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de viaje">
        {filtros.map((f) => {
          const on = f === filtro;
          return (
            <button
              key={f}
              type="button"
              onClick={() => elegir(f)}
              aria-pressed={on}
              className={`whitespace-nowrap rounded-full border-[1.5px] px-[18px] py-[10px] text-[15px] font-semibold transition-colors ${
                on ? "border-head bg-head text-bg" : "border-line2-chip bg-transparent text-head hover:bg-hover"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-7">
        {visibles.map((d) => (
          <Link key={d.name} href="/paquetes" className="group flex flex-col gap-[14px] no-underline">
            <Photo src={d.img} alt={d.name} className="aspect-[4/3] rounded-[28px]" sizes="(min-width: 1040px) 400px, (min-width: 700px) 50vw, 100vw">
              <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1.5 text-[13px] font-bold text-head">{d.type}</span>
            </Photo>
            <div className="flex w-full items-baseline justify-between gap-3">
              <div>
                <div className="text-[21px] font-bold text-head">{d.name}</div>
                <div className="mt-0.5 text-[15px] text-soft">{d.region}</div>
              </div>
              <div className="whitespace-nowrap text-[15px] font-bold text-otext group-hover:underline">Ver paquetes →</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
