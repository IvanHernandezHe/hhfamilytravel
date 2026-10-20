import { notFound } from "next/navigation";
import paquetes from "@/content/paquetes.json";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return paquetes.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = paquetes.find(x => x.slug === slug);
  if (!p) return {};
  return pageMeta(`/paquetes/${p.slug}`, p.name, `${p.nights} · ${p.ages}. Incluye: ${p.incluye.join(", ")}.`, p.img);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!paquetes.some(x => x.slug === slug)) notFound();
  return null;
}
