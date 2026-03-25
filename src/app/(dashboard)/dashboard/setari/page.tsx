"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Calendar,
  CreditCard,
  Lock,
  Save,
  Shield,
  Video,
} from "lucide-react";

export default function SetariPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Setări</h1>
        <p className="text-muted-foreground">
          Configurează notificări, integrări și preferințe.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="h-5 w-5 text-primary" />
              Notificări
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Programare nouă", desc: "Notificare când un client programează o ședință", default: true },
              { label: "Mesaj nou", desc: "Notificare la fiecare mesaj primit", default: true },
              { label: "Temă completată", desc: "Notificare când un client finalizează o temă", default: true },
              { label: "Recenzie nouă", desc: "Notificare când primești o recenzie", default: true },
              { label: "Reminder ședință", desc: "Reminder cu 30 minute înainte de ședință", default: true },
              { label: "Raport săptămânal", desc: "Sumar al activității tale în fiecare luni", default: false },
            ].map((notif) => (
              <div key={notif.label} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{notif.label}</div>
                  <div className="text-xs text-muted-foreground">{notif.desc}</div>
                </div>
                <Switch defaultChecked={notif.default} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Calendar integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Integrare calendar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Google Calendar</div>
                  <div className="text-sm text-emerald-600">Conectat</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Deconectează
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Sincronizare bidirecțională</div>
                <div className="text-xs text-muted-foreground">
                  Programările Zento apar în Google Calendar și invers
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Video sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Video className="h-5 w-5 text-primary" />
              Ședințe video
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Platformă preferată</Label>
              <div className="flex gap-3">
                {["Zento Video", "Google Meet", "Zoom"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                      platform === "Zento Video"
                        ? "border-primary bg-primary/5 text-primary"
                        : "hover:bg-accent"
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Generare automată link</div>
                <div className="text-xs text-muted-foreground">
                  Creează automat un link de video la confirmare programare
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CreditCard className="h-5 w-5 text-primary" />
              Plăți
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <div className="font-medium">Stripe Connect</div>
                <div className="text-sm text-muted-foreground">
                  Acceptă plăți prin card direct pe platformă
                </div>
              </div>
              <Button size="sm">Conectează Stripe</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Plată în avans obligatorie</div>
                <div className="text-xs text-muted-foreground">
                  Clienții plătesc la programare
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Facturare automată</div>
                <div className="text-xs text-muted-foreground">
                  Generează factură automată după fiecare ședință
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-primary" />
              Securitate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Schimbă parola</Label>
              <div className="flex gap-3">
                <Input type="password" placeholder="Parolă curentă" className="flex-1" />
                <Input type="password" placeholder="Parolă nouă" className="flex-1" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Autentificare 2FA</div>
                <div className="text-xs text-muted-foreground">
                  Adaugă un nivel suplimentar de securitate
                </div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Button className="gap-2">
          <Save className="h-4 w-4" /> Salvează setările
        </Button>
      </div>
    </div>
  );
}
