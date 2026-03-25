import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  CreditCard,
  FileText,
  Globe,
  Heart,
  MessageSquare,
  Shield,
  Star,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pentru specialiști",
  description:
    "Alătură-te rețelei Zento ca psiholog, coach sau mentor. Calendar integrat, plăți online, dashboard profesional.",
};

const features = [
  {
    icon: Globe,
    title: "Profil profesional",
    description:
      "Creează-ți un profil complet cu video de prezentare, servicii, prețuri și disponibilitate. Fii vizibil pentru mii de clienți.",
  },
  {
    icon: Calendar,
    title: "Calendar inteligent",
    description:
      "Gestionează-ți programările cu un calendar integrat. Sincronizare cu Google Calendar, notificări automate.",
  },
  {
    icon: Video,
    title: "Ședințe video integrate",
    description:
      "Desfășoară ședințe online direct în platformă. Fără link-uri externe, fără complicații.",
  },
  {
    icon: CreditCard,
    title: "Plăți online automate",
    description:
      "Primește plăți online înainte de ședință. Facturi generate automat, rapoarte financiare.",
  },
  {
    icon: BarChart3,
    title: "Monitorizare progres",
    description:
      "Urmărește starea clienților cu grafice de dispoziție. Accesează jurnalul și testele cu acordul clientului.",
  },
  {
    icon: FileText,
    title: "Teme și exerciții",
    description:
      "Trimite teme de lucru personalizate între ședințe. 20+ tipuri de exerciții gata de folosit.",
  },
  {
    icon: MessageSquare,
    title: "Chat securizat",
    description:
      "Comunică cu clienții între ședințe prin mesaje criptate. Răspunde rapid la întrebări.",
  },
  {
    icon: Heart,
    title: "Recenzii verificate",
    description:
      "Primește recenzii reale de la clienți care au participat la ședințe. Construiește-ți reputația.",
  },
];

const pricingPlans = [
  {
    name: "Start",
    price: "0",
    period: "3 luni gratuit",
    description: "Perfect pentru a testa platforma",
    features: [
      "Profil profesional complet",
      "Calendar cu programări",
      "Până la 10 clienți activi",
      "Chat cu clienții",
      "Ședințe video (5/lună)",
    ],
    cta: "Începe gratuit",
    popular: false,
  },
  {
    name: "Profesional",
    price: "149",
    period: "RON / lună",
    description: "Pentru specialiști activi",
    features: [
      "Tot din Start, plus:",
      "Clienți nelimitați",
      "Ședințe video nelimitate",
      "Plăți online integrate",
      "Facturi automate",
      "Teme și exerciții",
      "Monitorizare progres",
      "Prioritate în căutări",
    ],
    cta: "Alege Profesional",
    popular: true,
  },
  {
    name: "Premium",
    price: "299",
    period: "RON / lună",
    description: "Pentru cabinete și echipe",
    features: [
      "Tot din Profesional, plus:",
      "Până la 5 specialiști",
      "Pagină de cabinet",
      "Rapoarte avansate",
      "Manager cont dedicat",
      "Badge Premium în profil",
      "Articole promovate",
    ],
    cta: "Contactează-ne",
    popular: false,
  },
];

export default function PentruSpecialistiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.85_0.12_165/0.3),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
              <Users className="h-3.5 w-3.5" />
              Pentru psihologi, coachi și mentori
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Construiește-ți practica{" "}
              <span className="text-primary">pe Zento</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Tot ce ai nevoie pentru a-ți gestiona clienții, programările și
              plățile — într-un singur dashboard profesional.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link href="/inregistrare?tip=specialist">
                  <Zap className="h-4 w-4" />
                  Înscrie-te gratuit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                <Link href="#preturi">
                  Vezi prețurile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Instrumente profesionale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dashboard-ul Zento îți oferă tot ce ai nevoie ca specialist.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preturi" className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prețuri transparente
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fără costuri ascunse. Începe gratuit, upgradează când ești gata.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.popular ? "relative border-primary shadow-lg" : ""
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="gap-1">
                      <Star className="h-3 w-3" /> Cel mai popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <Button
                    className="mt-6 w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/inregistrare?tip=specialist">{plan.cta}</Link>
                  </Button>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Shield className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Alătură-te celor 450+ specialiști din rețeaua Zento
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Primele 3 luni sunt gratuite. Fără angajament, fără card bancar
              necesar.
            </p>
            <Button size="lg" className="mt-8 gap-2 text-base" asChild>
              <Link href="/inregistrare?tip=specialist">
                Creează-ți contul gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
