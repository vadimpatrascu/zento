import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Plus, Video } from "lucide-react";

const todaySessions = [
  { time: "09:00", endTime: "09:50", client: "Maria D.", type: "Psihoterapie individuală", format: "online", status: "upcoming" },
  { time: "10:00", endTime: "10:50", client: "Alexandru P.", type: "Consiliere", format: "online", status: "upcoming" },
  { time: "11:00", endTime: "11:50", client: "—", type: "Slot liber", format: "—", status: "free" },
  { time: "14:00", endTime: "15:20", client: "Elena & Andrei S.", type: "Terapie de cuplu", format: "cabinet", status: "upcoming" },
  { time: "15:30", endTime: "16:20", client: "Ion M.", type: "Psihoterapie individuală", format: "online", status: "upcoming" },
  { time: "16:30", endTime: "17:20", client: "—", type: "Slot liber", format: "—", status: "free" },
];

const weekDays = ["Lun", "Mar", "Mie", "Joi", "Vin"];
const currentDay = 0; // Monday

export default function CalendarPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Gestionează-ți programările și disponibilitatea.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Adaugă ședință
        </Button>
      </div>

      {/* Week selector */}
      <div className="mb-6 flex gap-2">
        {weekDays.map((day, i) => (
          <button
            key={day}
            type="button"
            className={`flex-1 rounded-lg border py-3 text-center text-sm font-medium transition-colors ${
              i === currentDay
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <div>{day}</div>
            <div className="mt-0.5 text-xs opacity-70">{24 + i} Mar</div>
          </button>
        ))}
      </div>

      {/* Today's schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            Luni, 24 Martie 2026
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todaySessions.map((session, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-lg border p-4 ${
                  session.status === "free"
                    ? "border-dashed bg-muted/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold">{session.time}</div>
                    <div className="text-xs text-muted-foreground">
                      {session.endTime}
                    </div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{session.client}</span>
                      {session.format === "online" && (
                        <Badge
                          variant="secondary"
                          className="gap-1 text-xs text-primary"
                        >
                          <Video className="h-3 w-3" /> Online
                        </Badge>
                      )}
                      {session.format === "cabinet" && (
                        <Badge variant="secondary" className="text-xs">
                          Cabinet
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {session.type}
                    </div>
                  </div>
                </div>

                {session.status === "upcoming" ? (
                  <div className="flex items-center gap-2">
                    {session.format === "online" && (
                      <Button size="sm" className="gap-1.5">
                        <Video className="h-3.5 w-3.5" />
                        Intră în ședință
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Detalii
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Plus className="h-3.5 w-3.5" />
                    Programează
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
