// Modo oscuro: clase .dark en <html>, guardado en localStorage (hh-theme).
// Sin preferencia guardada se queda en claro, como el prototipo.
export const themeInitScript = `try{if(localStorage.getItem('hh-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export function isDark() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark");
}

export function applyTheme(dark: boolean, save = false) {
  document.documentElement.classList.toggle("dark", dark);
  if (save) { try { localStorage.setItem("hh-theme", dark ? "dark" : "light"); } catch {} }
}
