import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const monthlyStats = [
  { label: "Venituri", value: "9.500 RON", change: "+18%", icon: DollarSign },
  { label: "Ședințe", value: "38", change: "+12%", icon: Calendar },
  { label: "Clienți noi", value: "6", change: "+2", icon: Users },
  { label: "Rating mediu", value: "4.9", change: "0", icon: Star },
];

const revenueByService = [
  { service: "Psihoterapie individuală", sessions: 22, revenue: "5.500 RON", pct: 58 },
  { service: "Consiliere psihologică", sessions: 8, revenue: "1.600 RON", pct: 17 },
  { service: "Terapie de cuplu", sessions: 5, revenue: "1.750 RON", pct: 18 },
  { service: "Coaching dezvoltare", sessions: 3, revenue: "650 RON", pct: 7 },
];

const monthlyTrend = [
  { month: "Oct", sessions: 28, revenue: 7000 },
  { month: "Nov", sessions: 32, revenue: 8000 },
  { month: "Dec", sessions: 25, revenue: 6250 },
  { month: "Ian", sessions: 30, revenue: 7500 },
  { month: "Feb", sessions: 34, revenue: 8500 },
  { month: "Mar", sessions: 38, revenue: 9500 },
];

function BarChart({ data }: { data: typeof monthlyTrend }) {
  const maxRevenue = Math.max(...data.map((d) => d.revenue));
  return (
    <div className="flex items-end gap-3">
      {data.map((d) => (
        <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {d.sessions}
          </span>
          <div
            className="w-full rounded-t-md bg-primary/80 transition-all"
            style={{ height: `${(d.revenue / maxRevenue) * 140}px` }}
          />
          <span className="text-xs text-muted-foreground">{d.month}</span>
        </div>
      ))}
    </div>
  );
}

export default function RapoartePage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Rapoarte</h1>
        <p className="text-muted-foreground">
          Statistici și analiză a activității tale — Martie 2026.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {monthlyStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="mt-1 text-2xl font-bold">{stat.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
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

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Revenue chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5 text-primary" />
              Evoluție lunară
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={monthlyTrend} />
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Ședințe pe lună</span>
              <span>Ultimele 6 luni</span>
            </div>
          </CardContent>
        </Card>

        {/* Revenue by service */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              Venituri pe serviciu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByService.map((item) => (
                <div key={item.service}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-muted-foreground">
                      {item.revenue}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs text-muted-foreground">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {item.sessions} ședințe
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Retention */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Retenție clienți</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-primary">87%</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Rată de retenție
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Clienți care revin luna următoare
              </div>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-primary">6.2</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Ședințe medii / client
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Media pe ultimele 3 luni
              </div>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Satisfacție clienți
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Bazat pe 47 recenzii
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
