import { h1Page, lead } from "./ui";

export default function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="flex max-w-[640px] flex-col gap-4">
      <h1 className={h1Page}>{title}</h1>
      {children}
    </div>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className={lead}>{children}</p>;
}
