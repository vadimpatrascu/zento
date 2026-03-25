import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock,
  FileText,
  Plus,
  Send,
} from "lucide-react";

const homeworkTemplates = [
  { name: "Jurnal cognitiv", category: "CBT", uses: 45 },
  { name: "Restructurare gânduri", category: "CBT", uses: 38 },
  { name: "Planificare activități", category: "Comportamental", uses: 32 },
  { name: "Exerciții de respirație", category: "Mindfulness", uses: 28 },
  { name: "Jurnal de recunoștință", category: "Pozitivă", uses: 25 },
  { name: "Analiza situațiilor", category: "CBT", uses: 22 },
  { name: "Obiective SMART", category: "Coaching", uses: 20 },
  { name: "Reflecție săptămânală", category: "General", uses: 18 },
];

const assignedTasks = [
  {
    client: "Maria D.",
    initials: "MD",
    task: "Jurnal cognitiv — identificarea gândurilor automate",
    assigned: "20 Mar",
    due: "24 Mar",
    status: "completed",
  },
  {
    client: "Alexandru P.",
    initials: "AP",
    task: "Planificare activități plăcute — minimum 3 pe săptămână",
    assigned: "18 Mar",
    due: "25 Mar",
    status: "in_progress",
  },
  {
    client: "Elena S.",
    initials: "ES",
    task: "Exerciții de comunicare asertivă cu partenerul",
    assigned: "19 Mar",
    due: "26 Mar",
    status: "in_progress",
  },
  {
    client: "Ion M.",
    initials: "IM",
    task: "Restructurare gânduri — tabel cu 5 coloane",
    assigned: "21 Mar",
    due: "28 Mar",
    status: "pending",
  },
  {
    client: "Maria D.",
    initials: "MD",
    task: "Exerciții de respirație — 2x pe zi, 10 minute",
    assigned: "15 Mar",
    due: "22 Mar",
    status: "completed",
  },
  {
    client: "Andreea L.",
    initials: "AL",
    task: "Obiective SMART pentru Q2 — 3 obiective profesionale",
    assigned: "17 Mar",
    due: "24 Mar",
    status: "overdue",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return (
        <Badge className="gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
          <CheckCircle2 className="h-3 w-3" /> Completat
        </Badge>
      );
    case "in_progress":
      return (
        <Badge variant="secondary" className="gap-1">
          <Clock className="h-3 w-3" /> În lucru
        </Badge>
      );
    case "overdue":
      return (
        <Badge variant="destructive" className="gap-1 text-xs">
          <Clock className="h-3 w-3" /> Întârziat
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="gap-1 text-xs">
          <Send className="h-3 w-3" /> Trimis
        </Badge>
      );
  }
}

export default function TemePage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Teme de lucru</h1>
          <p className="text-muted-foreground">
            Trimite teme personalizate și urmărește progresul clienților.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Trimite temă nouă
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Assigned tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Teme active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignedTasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {task.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {task.client}
                        </span>
                        {getStatusBadge(task.status)}
                      </div>
                      <div className="mt-0.5 text-sm text-muted-foreground">
                        {task.task}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Trimis: {task.assigned} · Termen: {task.due}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Șabloane</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {homeworkTemplates.map((tpl) => (
                <div
                  key={tpl.name}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">{tpl.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {tpl.category} · folosit de {tpl.uses}x
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Trimite
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
