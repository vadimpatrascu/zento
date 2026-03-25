import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle2,
  Heart,
  MessageSquare,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";

const specialistTypes = [
  {
    icon: Brain,
    title: "Psihologi",
    description:
      "Psihoterapeuți licențiați și verificați, specializați în anxietate, depresie, traume și multe altele.",
    count: "200+",
  },
  {
    icon: Rocket,
    title: "Coachi",
    description:
      "Coachi certificați pentru dezvoltare personală, carieră, leadership și transformare de viață.",
    count: "150+",
  },
  {
    icon: Target,
    title: "Mentori",
    description:
      "Mentori cu experiență în business, antreprenoriat, skill-uri și creștere profesională.",
    count: "100+",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Matching AI",
    description:
      "Răspunde la 5 întrebări și algoritmul nostru îți recomandă specialistul perfect pentru nevoile tale.",
  },
  {
    icon: Calendar,
    title: "Programări online",
    description:
      "Calendar cu disponibilitate în timp real. Rezervă ședința cu un click, fără apeluri telefonice.",
  },
  {
    icon: Video,
    title: "Ședințe video integrate",
    description:
      "Ședințe video securizate direct în platformă. Nu ai nevoie de alte aplicații.",
  },
  {
    icon: MessageSquare,
    title: "Chat securizat",
    description:
      "Comunică cu specialistul tău între ședințe. Mesaje criptate end-to-end.",
  },
  {
    icon: Heart,
    title: "Monitorizare stare",
    description:
      "Înregistrează-ți starea zilnică, urmărește progresul și împărtășește graficele cu specialistul.",
  },
  {
    icon: Shield,
    title: "Date protejate GDPR",
    description:
      "Criptare puternică, conformitate GDPR completă. Tu controlezi cine vede datele tale.",
  },
];

const steps = [
  {
    step: "01",
    title: "Spune-ne ce cauți",
    description:
      "Completează quiz-ul AI sau folosește filtrele avansate pentru a găsi specialistul potrivit.",
  },
  {
    step: "02",
    title: "Alege specialistul",
    description:
      "Compară profiluri, citește recenzii, vizionează video-uri de prezentare și verifică disponibilitatea.",
  },
  {
    step: "03",
    title: "Programează ședința",
    description:
      "Selectează data și ora direct din calendar. Plătești online, sigur și rapid.",
  },
  {
    step: "04",
    title: "Începe transformarea",
    description:
      "Conectează-te prin video, primește teme, monitorizează-ți progresul și crește.",
  },
];

const testimonials = [
  {
    name: "Maria D.",
    role: "Client coaching",
    text: "Am găsit în 5 minute un coach care m-a ajutat să-mi schimb complet perspectiva asupra carierei. Platforma e incredibil de intuitivă.",
    rating: 5,
  },
  {
    name: "Alexandru P.",
    role: "Client psihoterapie",
    text: "După luni de căutări, Zento m-a conectat cu un psiholog care mă înțelege cu adevărat. Programarea online e un game-changer.",
    rating: 5,
  },
  {
    name: "Dr. Elena S.",
    role: "Psiholog pe platformă",
    text: "Dashboard-ul pentru specialiști e cel mai bun pe care l-am folosit. Îmi urmăresc clienții, dau teme și am totul organizat.",
    rating: 5,
  },
];

const stats = [
  { value: "450+", label: "Specialiști verificați" },
  { value: "70+", label: "Orașe acoperite" },
  { value: "10.000+", label: "Ședințe completate" },
  { value: "4.9", label: "Rating mediu" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.85_0.12_165/0.3),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 px-3 py-1 text-sm"
            >
              <Zap className="h-3.5 w-3.5" />
              Platforma #1 pentru sănătate mintală și dezvoltare personală
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Găsește specialistul{" "}
              <span className="text-primary">potrivit pentru tine</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Psihologi, coachi și mentori verificați — toți într-un singur loc.
              Programări online, matching AI și instrumente care te ajută să
              crești.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link href="/matching">
                  <Sparkles className="h-4 w-4" />
                  Găsește-ți specialistul
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base"
                asChild
              >
                <Link href="/pentru-specialisti">
                  Ești specialist? Alătură-te
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Specialiști verificați
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Programări instant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                100% confidențial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Types */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Un singur loc pentru toate nevoile tale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fie că ai nevoie de suport emoțional, coaching de carieră sau
              mentorat în business — Zento are specialistul potrivit.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {specialistTypes.map((type) => (
              <Card
                key={type.title}
                className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{type.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {type.count}
                      </Badge>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-6 gap-2 px-0 text-primary"
                    asChild
                  >
                    <Link href="/specialisti">
                      Explorează <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cum funcționează
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              De la prima căutare la transformare — în 4 pași simpli.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <div key={item.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
                )}
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tot ce ai nevoie, într-o singură platformă
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Instrumente puternice pentru clienți și specialiști — de la
              programări la monitorizare și plăți.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ce spun utilizatorii noștri
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mii de oameni și-au găsit specialistul potrivit prin Zento.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="p-8">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-muted-foreground leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t pt-4">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Specialists CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden bg-primary text-primary-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(1_0_0/0.1),transparent)]" />
            <CardContent className="relative p-8 sm:p-12 lg:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ești psiholog, coach sau mentor?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Alătură-te rețelei Zento și conectează-te cu clienți noi.
                  Calendar integrat, plăți online, dashboard profesional —
                  gratuit pentru primii 3 luni.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2 text-base"
                    asChild
                  >
                    <Link href="/pentru-specialisti">
                      <Users className="h-4 w-4" />
                      Înscrie-te ca specialist
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="gap-2 text-base text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/pentru-specialisti#preturi">
                      Vezi prețurile <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Primul pas e cel mai important
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nu mai amâna. Găsește specialistul potrivit și începe-ți
              călătoria spre o viață mai bună — chiar acum.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link href="/matching">
                  <Search className="h-4 w-4" />
                  Începe quiz-ul AI gratuit
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base"
                asChild
              >
                <Link href="/specialisti">
                  Explorează specialiștii
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
