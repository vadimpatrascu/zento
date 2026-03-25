import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Heart,
  MessageSquare,
  Pencil,
  Sparkles,
  Star,
  Video,
} from "lucide-react";

const nextSession = {
  specialist: "Dr. Ana Popescu",
  type: "Psihoterapie individuală",
  date: "Luni, 24 Martie",
  time: "09:00",
  format: "online",
};

const moodHistory = [
  { day: "Lun", value: 7 },
  { day: "Mar", value: 6 },
  { day: "Mie", value: 8 },
  { day: "Joi", value: 7 },
  { day: "Vin", value: 8 },
  { day: "Sâm", value: 9 },
  { day: "Dum", value: 8 },
];

const tasks = [
  { name: "Jurnal cognitiv — identificarea gândurilor automate", due: "24 Mar", done: false },
  { name: "Exerciții de respirație — 2x pe zi", due: "Zilnic", done: true },
  { name: "Planificare activități plăcute", due: "25 Mar", done: false },
];

export default function ClientDashboardPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">
          Bine ai venit, Maria!
        </h1>
        <p className="text-muted-foreground">
          Iată un rezumat al progresului tău.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {/* Next session */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-primary">
                    Următoarea ședință
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    {nextSession.specialist}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {nextSession.type}
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      {nextSession.date}, {nextSession.time}
                    </span>
                    <Badge variant="secondary" className="gap-1 text-primary">
                      <Video className="h-3 w-3" /> Online
                    </Badge>
                  </div>
                </div>
                <Button className="gap-2">
                  <Video className="h-4 w-4" />
                  Intră în ședință
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mood tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="h-5 w-5 text-primary" />
                Starea ta din ultima săptămână
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-3">
                {moodHistory.map((d) => (
                  <div
                    key={d.day}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <span className="text-xs font-medium">{d.value}</span>
                    <div
                      className="w-full rounded-t-md bg-primary/70"
                      style={{ height: `${(d.value / 10) * 80}px` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Media: <strong className="text-foreground">7.6</strong>/10
                </div>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Pencil className="h-3.5 w-3.5" />
                  Înregistrează starea
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-primary" />
                Temele tale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.name}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                          task.done
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground"
                        }`}
                      >
                        {task.done && (
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <path
                              d="M2 6l3 3 5-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div
                          className={`text-sm ${task.done ? "text-muted-foreground line-through" : "font-medium"}`}
                        >
                          {task.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Termen: {task.due}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI helper */}
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold">Asistent AI</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Discută cu asistentul nostru AI pentru suport între ședințe.
              </p>
              <Button className="mt-4 w-full gap-2">
                <MessageSquare className="h-4 w-4" />
                Începe conversația
              </Button>
            </CardContent>
          </Card>

          {/* Specialist info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  AP
                </div>
                <div>
                  <div className="font-semibold">Dr. Ana Popescu</div>
                  <div className="text-sm text-muted-foreground">
                    Psiholog · CBT
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground">(47)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Mesaj
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Programează
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Acțiuni rapide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Pencil className="h-4 w-4" /> Completează jurnalul
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Heart className="h-4 w-4" /> Înregistrează starea
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" /> Test psihometric
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/specialisti">
                  <Sparkles className="h-4 w-4" /> Găsește alt specialist
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
