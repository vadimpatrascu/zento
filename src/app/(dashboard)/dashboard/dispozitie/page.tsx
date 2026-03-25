import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingDown, TrendingUp } from "lucide-react";

const clientMoods = [
  {
    name: "Maria D.",
    initials: "MD",
    trend: "up",
    current: 8,
    previous: 6,
    history: [5, 4, 5, 6, 6, 7, 7, 8, 8, 8],
    lastEntry: "Azi",
    note: "Se simte mai bine după exercițiile de mindfulness",
  },
  {
    name: "Alexandru P.",
    initials: "AP",
    trend: "stable",
    current: 6,
    previous: 6,
    history: [5, 6, 5, 6, 7, 6, 6, 6, 6, 6],
    lastEntry: "Ieri",
    note: "Stabil, progres lent dar constant",
  },
  {
    name: "Elena S.",
    initials: "ES",
    trend: "down",
    current: 4,
    previous: 6,
    history: [7, 7, 6, 6, 5, 5, 4, 4, 4, 4],
    lastEntry: "Acum 2 zile",
    note: "Scădere după conflict cu partenerul",
  },
  {
    name: "Ion M.",
    initials: "IM",
    trend: "up",
    current: 7,
    previous: 5,
    history: [3, 3, 4, 4, 5, 5, 6, 6, 7, 7],
    lastEntry: "Azi",
    note: "Progres constant — răspunde bine la CBT",
  },
  {
    name: "Andreea L.",
    initials: "AL",
    trend: "stable",
    current: 7,
    previous: 7,
    history: [6, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    lastEntry: "Acum 3 zile",
    note: "Stabilă, focusul e pe obiective profesionale",
  },
];

function MiniChart({ data }: { data: number[] }) {
  const max = 10;
  const width = 120;
  const height = 40;
  const points = data
    .map(
      (val, i) =>
        `${(i / (data.length - 1)) * width},${height - (val / max) * height}`
    )
    .join(" ");

  return (
    <svg width={width} height={height} className="text-primary">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function getMoodColor(value: number): string {
  if (value >= 7) return "text-emerald-500";
  if (value >= 5) return "text-amber-500";
  return "text-red-500";
}

function getMoodLabel(value: number): string {
  if (value >= 8) return "Foarte bine";
  if (value >= 6) return "Bine";
  if (value >= 4) return "Moderat";
  return "Dificil";
}

export default function DispozitionPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">
          Dispoziție clienți
        </h1>
        <p className="text-muted-foreground">
          Urmărește starea emoțională a clienților tăi în timp.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {clientMoods.filter((c) => c.trend === "up").length}
              </div>
              <div className="text-sm text-muted-foreground">În îmbunătățire</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {clientMoods.filter((c) => c.trend === "stable").length}
              </div>
              <div className="text-sm text-muted-foreground">Stabili</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <TrendingDown className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {clientMoods.filter((c) => c.trend === "down").length}
              </div>
              <div className="text-sm text-muted-foreground">Necesită atenție</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client mood cards */}
      <div className="space-y-4">
        {clientMoods.map((client) => (
          <Card
            key={client.name}
            className={
              client.trend === "down" ? "border-red-200 dark:border-red-900/50" : ""
            }
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {client.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{client.name}</span>
                      {client.trend === "down" && (
                        <Badge variant="destructive" className="text-xs">
                          Atenție
                        </Badge>
                      )}
                      {client.trend === "up" && (
                        <Badge className="bg-emerald-100 text-emerald-800 text-xs dark:bg-emerald-900/30 dark:text-emerald-300">
                          Progres
                        </Badge>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {client.note}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  {/* Mini chart */}
                  <div className="hidden sm:block">
                    <MiniChart data={client.history} />
                    <div className="mt-1 text-center text-xs text-muted-foreground">
                      Ultimele 10 zile
                    </div>
                  </div>

                  {/* Current score */}
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getMoodColor(client.current)}`}>
                      {client.current}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {getMoodLabel(client.current)}
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs">
                      {client.trend === "up" && (
                        <TrendingUp className="h-3 w-3 text-emerald-500" />
                      )}
                      {client.trend === "down" && (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className="text-muted-foreground">
                        vs. {client.previous}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
