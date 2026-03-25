import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Heart,
  MessageSquare,
  Search,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const clients = [
  {
    name: "Maria Dragomir",
    initials: "MD",
    type: "Psihoterapie individuală",
    sessions: 12,
    nextSession: "Luni, 09:00",
    mood: "up",
    moodLabel: "Îmbunătățire",
    lastActive: "Azi",
    status: "active",
  },
  {
    name: "Alexandru Popa",
    initials: "AP",
    type: "Consiliere psihologică",
    sessions: 8,
    nextSession: "Luni, 10:00",
    mood: "stable",
    moodLabel: "Stabil",
    lastActive: "Ieri",
    status: "active",
  },
  {
    name: "Elena Stoica",
    initials: "ES",
    type: "Psihoterapie de cuplu",
    sessions: 5,
    nextSession: "Luni, 14:00",
    mood: "down",
    moodLabel: "Atenție",
    lastActive: "Acum 2 zile",
    status: "active",
  },
  {
    name: "Ion Marin",
    initials: "IM",
    type: "Psihoterapie individuală",
    sessions: 20,
    nextSession: "Marți, 09:00",
    mood: "up",
    moodLabel: "Îmbunătățire",
    lastActive: "Azi",
    status: "active",
  },
  {
    name: "Andreea Luca",
    initials: "AL",
    type: "Coaching dezvoltare",
    sessions: 3,
    nextSession: "Marți, 11:00",
    mood: "stable",
    moodLabel: "Stabil",
    lastActive: "Acum 3 zile",
    status: "active",
  },
  {
    name: "Cristian Rus",
    initials: "CR",
    type: "Consiliere psihologică",
    sessions: 15,
    nextSession: "—",
    mood: "stable",
    moodLabel: "Finalizat",
    lastActive: "Acum 2 săptămâni",
    status: "inactive",
  },
];

export default function ClientiPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clienți</h1>
          <p className="text-muted-foreground">
            Gestionează și urmărește progresul clienților tăi.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Caută client..." className="w-64 pl-9" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {clients.filter((c) => c.status === "active").length}
              </div>
              <div className="text-sm text-muted-foreground">Clienți activi</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {clients.filter((c) => c.mood === "down").length}
              </div>
              <div className="text-sm text-muted-foreground">Necesită atenție</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">
                Ședințe săptămâna asta
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-between p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {client.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{client.name}</span>
                      {client.status === "inactive" && (
                        <Badge variant="secondary" className="text-xs">
                          Inactiv
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {client.type} · {client.sessions} ședințe
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Mood indicator */}
                  <div className="hidden items-center gap-1.5 sm:flex">
                    {client.mood === "up" && (
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    )}
                    {client.mood === "down" && (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    {client.mood === "stable" && (
                      <div className="h-4 w-4 flex items-center">
                        <div className="h-0.5 w-4 bg-muted-foreground rounded" />
                      </div>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {client.moodLabel}
                    </span>
                  </div>

                  {/* Next session */}
                  <div className="hidden text-right sm:block">
                    <div className="text-sm">{client.nextSession}</div>
                    <div className="text-xs text-muted-foreground">
                      Ultima activitate: {client.lastActive}
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Detalii
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
