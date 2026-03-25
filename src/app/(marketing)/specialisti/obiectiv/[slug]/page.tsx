import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpecialistCard } from "@/components/specialist-card";
import { mockSpecialists } from "@/lib/data";
import { objectiveSlugs, getObjectiveBySlug } from "@/lib/seo";
import { ArrowLeft, Target } from "lucide-react";

export function generateStaticParams() {
  return objectiveSlugs.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getObjectiveBySlug(slug);
  if (!found) return {};
  return {
    title: `Specialiști pentru ${found.objective} — Zento`,
    description: `Găsește psihologi, coachi și mentori specializați pe ${found.objective}. Programează online sau la cabinet.`,
  };
}

const objectiveContent: Record<string, { intro: string; signs: string[]; approach: string }> = {
  anxietate: {
    intro: "Anxietatea este una dintre cele mai frecvente provocări de sănătate mintală. Specialiștii noștri te ajută cu tehnici validate științific.",
    signs: ["Neliniște constantă", "Atacuri de panică", "Evitarea situațiilor sociale", "Griji excesive despre viitor", "Dificultăți de somn"],
    approach: "Abordările cele mai eficiente includ Terapia Cognitiv-Comportamentală (CBT), Mindfulness și tehnici de relaxare progresivă.",
  },
  depresie: {
    intro: "Depresia afectează modul în care gândești, simți și acționezi. Cu suportul potrivit, recuperarea este posibilă.",
    signs: ["Tristețe persistentă", "Pierderea interesului", "Oboseală cronică", "Dificultăți de concentrare", "Modificări ale apetitului"],
    approach: "Psihoterapia (CBT, psihodinamică) combinată cu schimbări de stil de viață oferă cele mai bune rezultate.",
  },
  stres: {
    intro: "Stresul cronic afectează atât sănătatea mintală, cât și cea fizică. Învață să-l gestionezi eficient.",
    signs: ["Tensiune musculară", "Iritabilitate", "Dificultăți de somn", "Probleme de concentrare", "Epuizare"],
    approach: "Managementul stresului include tehnici de mindfulness, restructurare cognitivă și planificare strategică.",
  },
};

export default async function ObjectivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getObjectiveBySlug(slug);
  if (!found) notFound();

  const specialists = mockSpecialists.filter((s) =>
    s.specializations.some(
      (sp) => sp.toLowerCase() === found.objective.toLowerCase()
    )
  );

  const content = objectiveContent[slug];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Button variant="ghost" size="sm" className="mb-6 gap-1.5" asChild>
        <Link href="/specialisti">
          <ArrowLeft className="h-4 w-4" /> Toți specialiștii
        </Link>
      </Button>

      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 gap-1">
          <Target className="h-3 w-3" /> {found.objective}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Specialiști pentru {found.objective}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {content?.intro ||
            `Găsește specialiști verificați pentru ${found.objective}. Programează ședințe online sau la cabinet.`}
        </p>
      </div>

      {/* Signs section */}
      {content?.signs && (
        <div className="mb-10 rounded-2xl border bg-card p-6">
          <h2 className="text-lg font-semibold">
            Când să cauți ajutor pentru {found.objective.toLowerCase()}?
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {content.signs.map((sign) => (
              <li key={sign} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      )}

      {specialists.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s) => (
            <SpecialistCard key={s.id} specialist={s} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <Target className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">
            Căutăm specialiști pentru {found.objective}
          </h3>
          <p className="mt-2 text-muted-foreground">
            Între timp, folosește quiz-ul nostru AI pentru a găsi un specialist
            potrivit.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/matching">Începe quiz-ul AI</Link>
          </Button>
        </div>
      )}

      {/* SEO content */}
      {content?.approach && (
        <div className="mt-16 rounded-2xl bg-muted/30 p-8">
          <h2 className="text-xl font-bold">
            Abordări terapeutice pentru {found.objective.toLowerCase()}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {content.approach}
          </p>
        </div>
      )}
    </div>
  );
}
