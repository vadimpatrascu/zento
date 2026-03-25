"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  MapPin,
  Rocket,
  Sparkles,
  Star,
  Target,
  Video,
} from "lucide-react";
import {
  mockSpecialists,
  getSpecialistTypeLabel,
  getSpecialistTypeColor,
  type Specialist,
} from "@/lib/data";

type Question = {
  id: string;
  question: string;
  description: string;
  options: { value: string; label: string; description?: string }[];
};

const questions: Question[] = [
  {
    id: "need",
    question: "Ce tip de suport cauți?",
    description: "Alege opțiunea care ți se potrivește cel mai bine.",
    options: [
      {
        value: "psiholog",
        label: "Suport emoțional",
        description:
          "Anxietate, depresie, stres, traume, relații — lucrez cu un psiholog.",
      },
      {
        value: "coach",
        label: "Dezvoltare și creștere",
        description:
          "Carieră, productivitate, mindfulness, obiective personale — lucrez cu un coach.",
      },
      {
        value: "mentor",
        label: "Ghidare profesională",
        description:
          "Business, antreprenoriat, leadership, experiență practică — lucrez cu un mentor.",
      },
    ],
  },
  {
    id: "focus",
    question: "Care e obiectivul tău principal?",
    description: "Pe ce vrei să te concentrezi în prima ședință?",
    options: [
      { value: "anxietate", label: "Anxietate sau stres" },
      { value: "depresie", label: "Depresie sau tristețe" },
      { value: "relatii", label: "Relații și comunicare" },
      { value: "cariera", label: "Carieră și dezvoltare profesională" },
      { value: "leadership", label: "Leadership și management" },
      { value: "dezvoltare", label: "Dezvoltare personală generală" },
    ],
  },
  {
    id: "format",
    question: "Ce format preferi?",
    description: "Cum vrei să decurgă ședințele?",
    options: [
      {
        value: "online",
        label: "Online (video)",
        description: "De acasă, de oriunde, flexibil.",
      },
      {
        value: "fizic",
        label: "Față în față",
        description: "La cabinet, contact personal.",
      },
      {
        value: "ambele",
        label: "Ambele variante",
        description: "Flexibilitate maximă.",
      },
    ],
  },
  {
    id: "budget",
    question: "Care e bugetul tău per ședință?",
    description: "Nu-ți face griji, există opțiuni pentru orice buget.",
    options: [
      { value: "low", label: "Sub 200 RON" },
      { value: "mid", label: "200–350 RON" },
      { value: "high", label: "Peste 350 RON" },
      { value: "any", label: "Nu contează prețul" },
    ],
  },
  {
    id: "language",
    question: "În ce limbă preferi ședințele?",
    description: "Selectează limba principală.",
    options: [
      { value: "Română", label: "Română" },
      { value: "Engleză", label: "Engleză" },
      { value: "any", label: "Nu contează" },
    ],
  },
];

function matchSpecialists(
  answers: Record<string, string>
): Specialist[] {
  return mockSpecialists
    .map((s) => {
      let score = 0;
      if (answers.need && s.type === answers.need) score += 30;
      if (answers.focus) {
        const focusMap: Record<string, string[]> = {
          anxietate: ["Anxietate", "Stres"],
          depresie: ["Depresie"],
          relatii: ["Relații", "Terapie de cuplu", "Comunicare"],
          cariera: ["Coaching carieră", "Tranziție carieră"],
          leadership: ["Leadership", "Antreprenoriat"],
          dezvoltare: ["Dezvoltare personală", "Mindfulness", "Stimă de sine"],
        };
        const targets = focusMap[answers.focus] || [];
        const matched = s.specializations.filter((sp) => targets.includes(sp));
        score += matched.length * 15;
      }
      if (answers.format === "online" && s.online) score += 10;
      if (answers.budget) {
        const budgetMap: Record<string, [number, number]> = {
          low: [0, 200],
          mid: [200, 350],
          high: [350, 9999],
          any: [0, 9999],
        };
        const [min, max] = budgetMap[answers.budget] || [0, 9999];
        if (s.priceMin <= max && s.priceMax >= min) score += 10;
      }
      if (
        answers.language &&
        answers.language !== "any" &&
        s.languages.includes(answers.language)
      )
        score += 5;
      score += s.rating * 2;
      score += s.reviewCount * 0.1;
      return { specialist: s, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((r) => r.specialist);
}

export function MatchingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Specialist[] | null>(null);

  const currentQ = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  function handleAnswer(value: string) {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
  }

  function next() {
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setResults(matchSpecialists(answers));
    }
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  if (results) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Specialiștii tăi recomandați
          </h1>
          <p className="mt-2 text-muted-foreground">
            Am analizat răspunsurile tale și iată cele mai bune potriviri.
          </p>
        </div>

        <div className="space-y-4">
          {results.map((s, i) => (
            <Card
              key={s.id}
              className={i === 0 ? "border-primary shadow-lg" : ""}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {i === 0 && (
                    <Badge className="absolute -top-3 left-4 gap-1">
                      <Star className="h-3 w-3" /> Cea mai bună potrivire
                    </Badge>
                  )}
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {s.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                    {s.verified && (
                      <CheckCircle2 className="absolute -bottom-0.5 -right-0.5 h-4 w-4 fill-primary text-primary-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-lg font-semibold">{s.name}</span>
                      <Badge className={getSpecialistTypeColor(s.type)}>
                        {getSpecialistTypeLabel(s.type)}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {s.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <strong className="text-foreground">{s.rating}</strong>
                        ({s.reviewCount})
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {s.city}
                      </span>
                      {s.online && (
                        <span className="flex items-center gap-1 text-primary">
                          <Video className="h-3.5 w-3.5" /> Online
                        </span>
                      )}
                      <span>
                        {s.priceMin}–{s.priceMax} {s.currency}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.shortBio}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 border-t pt-4">
                  <Button className="flex-1" asChild>
                    <Link href={`/specialist/${s.slug}#programare`}>
                      Programează ședință
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/specialist/${s.slug}`}>Vezi profil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => {
              setResults(null);
              setStep(0);
              setAnswers({});
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Reia quiz-ul
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Întrebarea {step + 1} din {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {currentQ.question}
        </h1>
        <p className="mt-2 text-muted-foreground">{currentQ.description}</p>
      </div>

      {/* Options */}
      <RadioGroup
        value={answers[currentQ.id] || ""}
        onValueChange={handleAnswer}
        className="space-y-3"
      >
        {currentQ.options.map((opt) => (
          <label
            key={opt.value}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all hover:border-primary/50 hover:bg-accent/50 ${
              answers[currentQ.id] === opt.value
                ? "border-primary bg-primary/5"
                : ""
            }`}
          >
            <RadioGroupItem value={opt.value} className="mt-0.5" />
            <div>
              <div className="font-medium">{opt.label}</div>
              {opt.description && (
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {opt.description}
                </div>
              )}
            </div>
          </label>
        ))}
      </RadioGroup>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={prev}
          disabled={step === 0}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi
        </Button>
        <Button
          onClick={next}
          disabled={!answers[currentQ.id]}
          className="gap-2"
        >
          {step === questions.length - 1 ? (
            <>
              <Sparkles className="h-4 w-4" />
              Vezi rezultatele
            </>
          ) : (
            <>
              Continuă
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
