"use client";

import { useState } from "react";
import { whatsappLink } from "@/config/site";
import { btnOrange } from "./ui";

const label = "flex flex-col gap-1.5 text-[14px] font-semibold text-head";
const field =
  "w-full border-[1.5px] border-line-input bg-bg px-[18px] py-[14px] text-[16px] font-normal text-text outline-none transition-colors placeholder:text-soft focus:border-head";

const tipos = ["Parques temáticos", "Crucero", "Playa todo incluido", "Europa", "Aún no sé"];

/** Arma el mensaje de WhatsApp con los datos del formulario (omite los campos vacíos). */
function buildMessage(form: HTMLFormElement) {
  const get = (name: string) => String(new FormData(form).get(name) ?? "").trim();
  const lines = [
    "Hola, me gustaría cotizar un viaje.\n",
    `Nombre: ${get("nombre")}`,
    `Mi WhatsApp: ${get("whatsapp")}`,
    `Tipo de viaje: ${get("tipo")}`,
    get("cuando") && `Fechas: ${get("cuando")}`,
    get("personas") && `Viajamos: ${get("personas")}`,
    get("familia") && `Más detalles: ${get("familia")}`,
  ];
  return lines.filter(Boolean).join("\n");
}

export default function ContactForm() {
  const [waUrl, setWaUrl] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = whatsappLink(buildMessage(e.currentTarget));
    setWaUrl(url);
    window.location.assign(url);
  }

  if (waUrl) {
    return (
      <div role="status" className="flex flex-col justify-center gap-2 rounded-[28px] bg-tint p-8">
        <div className="text-[24px] font-bold text-head">Te estamos redirigiendo a WhatsApp…</div>
        <p className="m-0 text-[16px] text-muted">
          Tu mensaje ya va escrito; solo tienes que enviarlo. Si no se abrió,{" "}
          <a href={waUrl} className="font-semibold text-otext underline">
            toca aquí
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
      <label className={label}>
        Nombre
        <input name="nombre" required autoComplete="name" placeholder="Tu nombre" className={`${field} rounded-full`} />
      </label>
      <label className={label}>
        WhatsApp
        <input name="whatsapp" required type="tel" autoComplete="tel" placeholder="+52 81 0000 0000" className={`${field} rounded-full`} />
      </label>
      <label className={label}>
        Tipo de viaje
        <select name="tipo" className={`${field} rounded-full`}>
          {tipos.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        ¿Cuándo?
        <input name="cuando" placeholder="ej. Julio 2027" className={`${field} rounded-full`} />
      </label>
      <label className={`${label} col-span-full`}>
        ¿Cuántos viajan?
        <input name="personas" placeholder="ej. 2 adultos y 2 niños (5 y 8 años)" className={`${field} rounded-full`} />
      </label>
      <label className={`${label} col-span-full`}>
        Cuéntanos de tu familia
        <textarea
          name="familia"
          rows={3}
          placeholder="Ciudad de salida, presupuesto, lo que les gusta..."
          className={`${field} resize-y rounded-[24px]`}
        />
      </label>
      <button type="submit" className={`${btnOrange} col-span-full border-0 p-[17px] text-[17px]`}>
        Enviar por WhatsApp
      </button>
    </form>
  );
}
