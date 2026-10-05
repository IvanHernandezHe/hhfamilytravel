"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import { Menu, MessageCircle, X } from "./Icons";
import Logo from "./Logo";
import { btnOrange } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar.
  useEffect(() => setOpen(false), [pathname]);

  const pill = (href: string) =>
    `whitespace-nowrap rounded-full px-[14px] py-[9px] text-[15px] font-semibold no-underline transition-colors ${
      isActive(pathname, href) ? "bg-hover text-head" : "text-muted hover:text-head"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-line-header bg-header backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1240px] items-center gap-7 px-4 py-3 sm:px-8">
        <Link href="/" className="mr-auto" aria-label="HH Family Travel — Inicio">
          <Logo variant="horizontal" className="h-9 lg:h-11" />
        </Link>

        <nav aria-label="Principal" className="hidden gap-1.5 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={pill(n.href)} aria-current={isActive(pathname, n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnOrange} hidden gap-2 px-5 py-[11px] text-[15px] sm:inline-flex`}
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 flex size-11 items-center justify-center rounded-full border-0 bg-transparent text-head hover:bg-hover lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-line-header px-4 pb-5 pt-3 sm:px-8 lg:hidden">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={`${pill(n.href)} block px-[18px] py-3 text-[17px]`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnOrange} mt-3 flex w-full px-5 py-[14px] text-[16px]`}
          >
            <MessageCircle size={18} />
            Escríbenos por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
