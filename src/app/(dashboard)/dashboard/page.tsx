import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Clienți activi",
    value: "24",
    change: "+3 luna asta",
    icon: Users,
  },
  {
    title: "Ședințe luna asta",
    value: "38",
    change: "+12% vs. luna trecută",
    icon: Calendar,
  },
  {
    title: "Mesaje necitite",
    value: "5",
    change: "2 noi azi",
    icon: MessageSquare,
  },
  {
    title: "Rating mediu",
    value: "4.9",
    change: "47 recenzii",
    icon: Star,
  },
];

const upcomingSessions = [
  {
    client: "Maria D.",
    type: "Psihoterapie individuală",
    time: "09:00",
    date: "Azi",
    status: "confirmed",
  },
  {
    client: "Alexandru P.",
    type: "Consiliere psihologică",
    time: "10:00",
    date: "Azi",
    status: "confirmed",
  },
  {
    client: "Elena S.",
    type: "Psihoterapie de cuplu",
    time: "14:00",
    date: "Azi",
    status: "pending",
  },
  {
    client: "Ion M.",
    type: "Psihoterapie individuală",
    time: "09:00",
    date: "Mâine",
    status: "confirmed",
  },
  {
    client: "Andreea L.",
    type: "Coaching dezvoltare",
    time: "11:00",
    date: "Mâine",
    status: "confirmed",
  },
];

const recentActivity = [
  {
    text: "Maria D. a completat tema de lucru",
    time: "Acum 2 ore",
  },
  {
    text: "Alexandru P. a înregistrat starea zilnică",
    time: "Acum 3 ore",
  },
  {
    text: "Recenzie nouă de la Elena S. (5 stele)",
    time: "Ieri",
  },
  {
    text: "Ion M. a trimis un mesaj",
    time: "Ieri",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Bun venit, Ana!</h1>
        <p className="text-muted-foreground">
          Iată un rezumat al activității tale.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    {stat.title}
                  </div>
                  <div className="mt-1 text-2xl font-bold">{stat.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    {stat.change}
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Ședințe programate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingSessions.map((session, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {session.client
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium">{session.client}</div>
                      <div className="text-sm text-muted-foreground">
                        {session.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      {session.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      {session.date}
                      <Badge
                        variant={
                          session.status === "confirmed"
                            ? "default"
                            : "secondary"
                        }
                        className="ml-1 text-xs"
                      >
                        {session.status === "confirmed"
                          ? "Confirmat"
                          : "În așteptare"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Activitate recentă
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <div className="text-sm">{activity.text}</div>
                    <div className="text-xs text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
