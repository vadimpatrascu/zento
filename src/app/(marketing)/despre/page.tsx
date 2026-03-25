import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Povestea Zento — cum am creat platforma care conectează clienții cu psihologi, coachi și mentori verificați.",
};

const team = [
  { name: "Vadim Pătrascu", role: "Fondator & CEO", initials: "VP" },
  { name: "Ana Radu", role: "CTO", initials: "AR" },
  { name: "Maria Ionescu", role: "Head of Product", initials: "MI" },
  { name: "Dr. Elena Popescu", role: "Advisor Psihoterapie", initials: "EP" },
  { name: "Cristian Dumitrescu", role: "Lead Developer", initials: "CD" },
  { name: "Ioana Moldovan", role: "UX Designer", initials: "IM" },
];

const values = [
  {
    icon: Heart,
    title: "Accesibilitate",
    description:
      "Credem că fiecare persoană merită acces la suport de calitate, indiferent de locație sau buget.",
  },
  {
    icon: Shield,
    title: "Confidențialitate",
    description:
      "Datele tale sunt sacre. Criptare end-to-end, conformitate GDPR și control total al datelor.",
  },
  {
    icon: Target,
    title: "Calitate",
    description:
      "Fiecare specialist din rețea este verificat. Licențe, certificări și recenzii reale.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description:
      "Construim o comunitate de specialiști dedicați și clienți care cresc împreună.",
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Despre Zento
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Credem că fiecare merit㠓să se simtă{" "}
              <span className="text-primary">bine</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Am creat Zento pentru că am văzut o problemă reală: oamenii care au
              nevoie de ajutor nu găsesc ușor specialistul potrivit. Psihologi,
              coachi și mentori excelent pregătiți rămân invizibili. Am decis
              să schimbăm asta.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Povestea noastră</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Totul a început când fondatorul nostru a trecut printr-o perioadă
                dificilă. Căutarea unui specialist potrivit a fost frustrantă —
                site-uri învechite, informații incomplete, fără recenzii, fără
                posibilitate de programare online.
              </p>
              <p>
                Am realizat că problema nu e lipsa specialiștilor buni, ci lipsa
                unei platforme care să-i conecteze eficient cu oamenii care au
                nevoie de ei. Și nu doar psihologi — ci și coachi și mentori.
                Toți cei care ajută oamenii să crească.
              </p>
              <p>
                Așa s-a născut Zento — o platformă care pune pe primul loc
                experiența utilizatorului: matching AI, programări reale cu
                calendar, plăți securizate și instrumente profesionale pentru
                specialiști.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Valorile noastre</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Echipa</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Oamenii din spatele Zento.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "450+", label: "Specialiști" },
              { value: "70+", label: "Orașe" },
              { value: "10.000+", label: "Ședințe" },
              { value: "2024", label: "Anul lansării" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">
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
    </>
  );
}
