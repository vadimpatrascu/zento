import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  Heart,
  Presentation,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pentru companii",
  description:
    "Programe de wellbeing corporativ cu Zento. Workshop-uri, ședințe de terapie și coaching pentru angajați.",
};

const offerings = [
  {
    icon: Presentation,
    title: "Workshop-uri",
    description:
      "Sesiuni interactive cu specialiști pe teme de burnout, stres, comunicare, leadership și dezvoltare personală.",
  },
  {
    icon: Heart,
    title: "Ședințe individuale",
    description:
      "Acces la 450+ specialiști verificați pentru ședințe de psihoterapie, coaching sau mentorat ca beneficiu pentru angajați.",
  },
  {
    icon: BookOpen,
    title: "Programe personalizate",
    description:
      "Designăm programe de wellbeing adaptate sectorului tău, dimensiunii echipei și obiectivelor companiei.",
  },
  {
    icon: BarChart3,
    title: "Rapoarte și analytics",
    description:
      "Dashboard cu metrici anonimizate: utilizare, satisfacție, trenduri — pentru decizii bazate pe date.",
  },
];

const benefits = [
  "Reduce absenteismul cu până la 30%",
  "Crește retenția angajaților",
  "Îmbunătățește productivitatea echipelor",
  "Demonstrează commitment față de wellbeing",
  "Conformitate cu standardele ESG",
  "ROI pozitiv în primele 6 luni",
];

export default function PentruCompaniiPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.85_0.12_165/0.3),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
              <Building2 className="h-3.5 w-3.5" />
              Wellbeing corporativ
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Angajați sănătoși,{" "}
              <span className="text-primary">companie puternică</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Investește în sănătatea mintală a echipei tale. Workshop-uri,
              ședințe individuale și programe personalizate — totul prin Zento.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link href="/contact">
                  <Users className="h-4 w-4" />
                  Cere o ofertă
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                <Link href="#servicii">
                  Vezi serviciile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="servicii" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Ce oferim companiilor
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {offerings.map((o) => (
              <Card key={o.title} className="transition-all hover:shadow-md">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{o.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {o.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                De ce Zento pentru compania ta?
              </h2>
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <Shield className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">
                  Date 100% anonimizate
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Compania nu vede niciodată cine folosește platforma sau ce
                  discută cu specialistul. Rapoartele conțin doar date
                  agregate și anonimizate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Programează o discuție
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Spune-ne despre compania ta și îți pregătim o ofertă personalizată
            în 48 de ore.
          </p>
          <Button size="lg" className="mt-8 gap-2 text-base" asChild>
            <Link href="/contact">
              Contactează-ne <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
