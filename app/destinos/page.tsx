import type { Metadata } from "next";
import DestinosGrid from "@/components/DestinosGrid";
import PageIntro, { Lead } from "@/components/PageIntro";
import { destinos } from "@/content/destinos";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Lugares que conocemos bien y que funcionan para viajar con niños, abuelos o grupos grandes.",
};

export default function DestinosPage() {
  return (
    <div className="flex flex-col gap-10 pb-[104px] pt-16">
      <PageIntro title="Destinos">
        <Lead>Lugares que conocemos bien y que funcionan para viajar con niños, abuelos o grupos grandes.</Lead>
      </PageIntro>
      {/* El filtro inicial (?tipo=) se lee en el navegador: el sitio es estático. */}
      <DestinosGrid destinos={destinos} />
    </div>
  );
}
