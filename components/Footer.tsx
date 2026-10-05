import Link from "next/link";
import { nav, site } from "@/config/site";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-line-header">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-5 px-4 py-8 text-[14px] text-soft sm:px-8">
        <Logo variant="horizontal" className="h-10" />
        <nav aria-label="Pie de página" className="flex flex-wrap gap-5">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[14px] text-muted no-underline hover:text-orange">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <span>© {site.year} {site.name}</span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
