import type { Metadata } from "next";
import PageIntro, { Lead } from "@/components/PageIntro";
import Photo from "@/components/Photo";
import { kicker } from "@/components/ui";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Consejos prácticos para viajar con niños, de quienes lo hacen todo el tiempo.",
};

// Los artículos aún no tienen página propia; cuando existan, envolver cada tarjeta en <Link href={`/blog/${slug}`}>.
export default function BlogPage() {
  const destacado = posts.find((p) => p.featured);
  const resto = posts.filter((p) => p !== destacado);

  return (
    <div className="flex flex-col gap-12 pb-[104px] pt-16">
      <PageIntro title="Blog">
        <Lead>Consejos prácticos para viajar con niños, de quienes lo hacen todo el tiempo.</Lead>
      </PageIntro>

      {destacado && (
        <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-10">
          <Photo src={destacado.img} alt={destacado.title} className="aspect-[16/10] rounded-[32px]" sizes="(min-width: 1040px) 600px, 100vw" priority />
          <div className="flex flex-col gap-[14px]">
            <div className={kicker}>Destacado · {destacado.category}</div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em] text-head text-balance">
              {destacado.title}
            </h2>
            {destacado.excerpt && <p className="m-0 text-[17px] leading-[1.6] text-muted">{destacado.excerpt}</p>}
            <div className="text-[14px] text-soft">{destacado.minutes} min de lectura</div>
          </div>
        </article>
      )}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-x-7 gap-y-9">
        {resto.map((p) => (
          <article key={p.slug} className="flex flex-col gap-3">
            <Photo src={p.img} className="aspect-[3/2] rounded-[24px]" sizes="(min-width: 1040px) 400px, (min-width: 680px) 50vw, 100vw" />
            <div className={kicker}>{p.category}</div>
            <h3 className="m-0 text-[20px] font-bold leading-[1.3] text-head">{p.title}</h3>
            <div className="text-[14px] text-soft">{p.minutes} min de lectura</div>
          </article>
        ))}
      </div>
    </div>
  );
}
