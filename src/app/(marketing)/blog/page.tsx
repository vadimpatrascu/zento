import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articole despre sănătate mintală, coaching, dezvoltare personală și mentorat de la specialiștii Zento.",
};

const articles = [
  {
    slug: "cum-sa-alegi-psihologul-potrivit",
    title: "Cum să alegi psihologul potrivit pentru tine",
    excerpt:
      "Ghid complet pentru a găsi specialistul care se potrivește nevoilor tale. Criterii, întrebări de pus și semne roșii.",
    author: "Dr. Ana Popescu",
    date: "20 Mar 2026",
    readTime: "8 min",
    category: "Psihoterapie",
  },
  {
    slug: "beneficiile-coaching-ului",
    title: "5 beneficii dovedite ale coaching-ului de carieră",
    excerpt:
      "Studiile arată că coaching-ul accelerează dezvoltarea profesională. Descoperă ce poți obține și cum funcționează.",
    author: "Mihai Ionescu",
    date: "18 Mar 2026",
    readTime: "6 min",
    category: "Coaching",
  },
  {
    slug: "anxietatea-la-locul-de-munca",
    title: "Anxietatea la locul de muncă: cauze și soluții",
    excerpt:
      "Burnout-ul și anxietatea profesională afectează 1 din 4 angajați. Află ce poți face concret pentru a gestiona stresul.",
    author: "Dr. Cristina Moldovan",
    date: "15 Mar 2026",
    readTime: "10 min",
    category: "Sănătate mintală",
  },
  {
    slug: "mindfulness-pentru-incepatori",
    title: "Mindfulness pentru începători: un ghid practic",
    excerpt:
      "Meditația mindfulness nu e mistică — e o tehnică validată științific. Iată cum să începi în doar 5 minute pe zi.",
    author: "Adrian Petrescu",
    date: "12 Mar 2026",
    readTime: "7 min",
    category: "Mindfulness",
  },
  {
    slug: "de-ce-ai-nevoie-de-mentor",
    title: "De ce ai nevoie de un mentor în carieră (și cum să găsești unul)",
    excerpt:
      "Un mentor îți poate accelera creșterea cu ani. Explorăm diferența dintre coaching și mentorat și când ai nevoie de fiecare.",
    author: "Elena Dumitrescu",
    date: "10 Mar 2026",
    readTime: "9 min",
    category: "Mentorat",
  },
  {
    slug: "terapia-de-cuplu-functioneaza",
    title: "Terapia de cuplu funcționează? Ce spun studiile",
    excerpt:
      "Când merită să începi terapia de cuplu, ce să aștepți și cât durează procesul. Bazat pe cercetare și experiență clinică.",
    author: "Laura Stanescu",
    date: "8 Mar 2026",
    readTime: "8 min",
    category: "Relații",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Blog Zento
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Articole despre sănătate mintală, coaching, dezvoltare personală și
          mentorat — scrise de specialiștii din rețeaua noastră.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card
            key={article.slug}
            className="group transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-4 text-xs">
                {article.category}
              </Badge>
              <Link
                href={`/blog/${article.slug}`}
                className="block"
              >
                <h2 className="text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  {article.title}
                </h2>
              </Link>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" /> {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {article.readTime}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
