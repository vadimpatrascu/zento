"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Video,
} from "lucide-react";
import type { Specialist, Service } from "@/lib/data";

const timeSlots = [
  "09:00", "09:50", "10:00", "10:50", "11:00", "11:50",
  "14:00", "14:50", "15:00", "15:50", "16:00", "16:50",
];

const weekDates = [
  { day: "Lun", date: "24 Mar", available: true },
  { day: "Mar", date: "25 Mar", available: true },
  { day: "Mie", date: "26 Mar", available: true },
  { day: "Joi", date: "27 Mar", available: true },
  { day: "Vin", date: "28 Mar", available: true },
  { day: "Sâm", date: "29 Mar", available: false },
  { day: "Dum", date: "30 Mar", available: false },
];

type BookingStep = "service" | "datetime" | "details" | "confirm";

export function BookingFlow({ specialist }: { specialist: Specialist }) {
  const [step, setStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [format, setFormat] = useState<"online" | "cabinet">("online");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <Card id="programare">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Programare confirmată!</h3>
          <p className="mt-2 text-muted-foreground">
            Ședința ta cu {specialist.name} a fost programată.
          </p>
          <div className="mt-6 rounded-lg border p-4 text-left">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Serviciu</span>
                <span className="font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ora</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format</span>
                <span className="font-medium">
                  {format === "online" ? "Online (video)" : "La cabinet"}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold text-primary">
                  {selectedService?.price} {selectedService?.currency}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Vei primi un email de confirmare cu linkul de video.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="programare">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5 text-primary" />
          Programează o ședință
        </CardTitle>
        {/* Progress */}
        <div className="flex gap-1 pt-2">
          {(["service", "datetime", "details", "confirm"] as const).map(
            (s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  (["service", "datetime", "details", "confirm"] as const).indexOf(step) >= i
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              />
            )
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Step 1: Service selection */}
        {step === "service" && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              1. Alege serviciul
            </h3>
            {specialist.services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`w-full rounded-lg border p-3 text-left transition-all hover:border-primary/50 ${
                  selectedService?.id === service.id
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium">{service.name}</div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {service.duration} min
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {service.price} {service.currency}
                  </span>
                </div>
              </button>
            ))}
            <Button
              onClick={() => setStep("datetime")}
              disabled={!selectedService}
              className="mt-4 w-full gap-2"
            >
              Continuă <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === "datetime" && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              2. Alege data și ora
            </h3>

            {/* Format */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFormat("online")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm transition-all ${
                  format === "online"
                    ? "border-primary bg-primary/5 text-primary"
                    : "hover:bg-accent"
                }`}
              >
                <Video className="h-4 w-4" /> Online
              </button>
              <button
                type="button"
                onClick={() => setFormat("cabinet")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm transition-all ${
                  format === "cabinet"
                    ? "border-primary bg-primary/5 text-primary"
                    : "hover:bg-accent"
                }`}
              >
                <Calendar className="h-4 w-4" /> Cabinet
              </button>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1">
              {weekDates.map((d) => (
                <button
                  key={d.date}
                  type="button"
                  disabled={!d.available}
                  onClick={() => setSelectedDate(d.date)}
                  className={`rounded-lg border py-2 text-center text-xs transition-all ${
                    selectedDate === d.date
                      ? "border-primary bg-primary text-primary-foreground"
                      : d.available
                        ? "hover:border-primary/50 hover:bg-accent"
                        : "cursor-not-allowed opacity-40"
                  }`}
                >
                  <div className="font-medium">{d.day}</div>
                  <div className="mt-0.5 text-[10px] opacity-70">{d.date.split(" ")[0]}</div>
                </button>
              ))}
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-lg border py-2 text-center text-sm transition-all ${
                      selectedTime === time
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:border-primary/50 hover:bg-accent"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setStep("service")} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Înapoi
              </Button>
              <Button
                onClick={() => setStep("details")}
                disabled={!selectedDate || !selectedTime}
                className="flex-1 gap-2"
              >
                Continuă <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact details */}
        {step === "details" && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              3. Datele tale
            </h3>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Nume complet</Label>
                <Input placeholder="Numele tău" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Email</Label>
                <Input type="email" placeholder="email@exemplu.ro" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Telefon</Label>
                <Input type="tel" placeholder="+40 7xx xxx xxx" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Mesaj (opțional)</Label>
                <Textarea rows={3} placeholder="Ce dorești să discuți?" />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setStep("datetime")} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Înapoi
              </Button>
              <Button onClick={() => setStep("confirm")} className="flex-1 gap-2">
                Continuă <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirm & Pay */}
        {step === "confirm" && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              4. Confirmă și plătește
            </h3>
            <div className="space-y-2 rounded-lg border p-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Specialist</span>
                <span className="font-medium">{specialist.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Serviciu</span>
                <span className="font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ora</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Durată</span>
                <span className="font-medium">{selectedService?.duration} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format</span>
                <Badge variant="secondary" className="gap-1 text-xs">
                  {format === "online" ? (
                    <><Video className="h-3 w-3" /> Online</>
                  ) : (
                    "Cabinet"
                  )}
                </Badge>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-bold text-primary">
                  {selectedService?.price} {selectedService?.currency}
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setStep("details")} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Înapoi
              </Button>
              <Button onClick={() => setConfirmed(true)} className="flex-1 gap-2">
                <CreditCard className="h-4 w-4" /> Confirmă programarea
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
