"use client";

import { useEffect, useState } from "react";
import { Moon } from "./Icons";

export const THEME_KEY = "hh-theme";

/**
 * Script en línea para <head>: aplica el tema antes del primer pintado.
 * Usa la preferencia guardada y, si no hay, prefers-color-scheme.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-line2 bg-transparent px-[14px] py-2 text-[14px] font-semibold text-head transition-colors hover:bg-hover"
    >
      <Moon size={16} />
      {/* Antes de montar no sabemos el tema; el texto por defecto evita un salto de ancho. */}
      {dark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
