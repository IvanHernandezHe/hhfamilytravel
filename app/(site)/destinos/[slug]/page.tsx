import { notFound } from "next/navigation";
import destinos from "@/content/destinos.json";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinos.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinos.find(x => x.slug === slug);
  if (!d) return {};
  return pageMeta(`/destinos/${d.slug}`, `${d.name}: guía para viajar en familia`, `Mejor época: ${d.epoca}. Edades ideales: ${d.edades}. ${d.tips[0]}`, d.img);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!destinos.some(x => x.slug === slug)) notFound();
  return null;
}
