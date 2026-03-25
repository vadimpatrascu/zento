import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpecialistCard } from "@/components/specialist-card";
import { mockSpecialists } from "@/lib/data";
import { citySlugs, getCityBySlug } from "@/lib/seo";
import { ArrowLeft, MapPin } from "lucide-react";

export function generateStaticParams() {
  return citySlugs.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const found = getCityBySlug(city);
  if (!found) return {};
  return {
    title: `Psihologi, Coachi și Mentori în ${found.city} — Zento`,
    description: `Găsește specialiștii verificați din ${found.city}. Programează online ședințe de psihoterapie, coaching sau mentorat.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const found = getCityBySlug(city);
  if (!found) notFound();

  const specialists = mockSpecialists.filter(
    (s) => s.city === found.city || s.cities.includes(found.city)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Button variant="ghost" size="sm" className="mb-6 gap-1.5" asChild>
        <Link href="/specialisti">
          <ArrowLeft className="h-4 w-4" /> Toți specialiștii
        </Link>
      </Button>

      <div className="mb-8">
        <Badge variant="secondary" className="mb-3 gap-1">
          <MapPin className="h-3 w-3" /> {found.city}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Specialiști în {found.city}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Psihologi, coachi și mentori verificați din {found.city}. Programări
          online sau la cabinet.
        </p>
      </div>

      {specialists.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s) => (
            <SpecialistCard key={s.id} specialist={s} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <MapPin className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">
            Încă nu avem specialiști în {found.city}
          </h3>
          <p className="mt-2 text-muted-foreground">
            Între timp, poți căuta specialiști online care acceptă clienți din
            orice oraș.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/specialisti?online=true">
              Vezi specialiști online
            </Link>
          </Button>
        </div>
      )}

      {/* City SEO content */}
      <div className="mt-16 rounded-2xl bg-muted/30 p-8">
        <h2 className="text-xl font-bold">
          Despre serviciile de sănătate mintală în {found.city}
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Zento îți oferă acces la specialiști verificați în {found.city} —
          psihologi clinicieni, psihoterapeuți, coachi de dezvoltare personală
          și mentori profesioniști. Fiecare specialist din rețeaua noastră
          este verificat și are licențele necesare pentru a practica.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Poți programa ședințe fie la cabinetul specialistului din{" "}
          {found.city}, fie online prin platforma noastră de video securizată.
          Matching-ul AI te ajută să găsești specialistul potrivit pentru
          nevoile tale specifice.
        </p>
      </div>
    </div>
  );
}
