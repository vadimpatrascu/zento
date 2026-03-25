"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle2,
  Globe,
  Languages,
  MapPin,
  Pencil,
  Plus,
  Save,
  Star,
  Trash2,
  Video,
} from "lucide-react";

export default function ProfilPage() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profilul meu</h1>
          <p className="text-muted-foreground">
            Gestionează informațiile care apar pe profilul tău public.
          </p>
        </div>
        <Button
          onClick={() => setEditing(!editing)}
          variant={editing ? "default" : "outline"}
          className="gap-2"
        >
          {editing ? (
            <>
              <Save className="h-4 w-4" /> Salvează
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4" /> Editează
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="servicii">Servicii</TabsTrigger>
          <TabsTrigger value="pregatire">Pregătire</TabsTrigger>
          <TabsTrigger value="disponibilitate">Disponibilitate</TabsTrigger>
        </TabsList>

        {/* General */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informații de bază</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  AP
                </div>
                {editing && (
                  <Button variant="outline" size="sm">
                    Schimbă fotografia
                  </Button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Nume complet</Label>
                  <Input
                    defaultValue="Dr. Ana Popescu"
                    disabled={!editing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Titlu profesional</Label>
                  <Input
                    defaultValue="Psiholog clinician, Psihoterapeut CBT"
                    disabled={!editing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    defaultValue="ana.popescu@email.com"
                    disabled={!editing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Telefon</Label>
                  <Input
                    defaultValue="+40 721 234 567"
                    disabled={!editing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Despre mine</Label>
                <Textarea
                  rows={5}
                  disabled={!editing}
                  defaultValue="Sunt psiholog clinician cu 12 ani de experiență în terapia cognitiv-comportamentală. M-am specializat pe anxietate, depresie și managementul stresului. Abordarea mea combină tehnici CBT cu mindfulness pentru rezultate durabile."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Detalii practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Oraș
                  </Label>
                  <Input defaultValue="București" disabled={!editing} />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Globe className="h-4 w-4" /> Website
                  </Label>
                  <Input
                    defaultValue="www.anapopescu-psihoterapeut.ro"
                    disabled={!editing}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Ședințe online</div>
                    <div className="text-sm text-muted-foreground">
                      Activează pentru a oferi ședințe video
                    </div>
                  </div>
                </div>
                <Switch defaultChecked disabled={!editing} />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Languages className="h-4 w-4" /> Limbi vorbite
                </Label>
                <div className="flex flex-wrap gap-2">
                  {["Română", "Engleză", "Franceză"].map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                      {editing && (
                        <button type="button" className="ml-1 opacity-60 hover:opacity-100">
                          ×
                        </button>
                      )}
                    </Badge>
                  ))}
                  {editing && (
                    <Button variant="outline" size="sm" className="h-6 gap-1 text-xs">
                      <Plus className="h-3 w-3" /> Adaugă
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Servicii */}
        <TabsContent value="servicii" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Serviciile tale</h3>
            {editing && (
              <Button size="sm" className="gap-1.5">
                <Plus className="h-4 w-4" /> Adaugă serviciu
              </Button>
            )}
          </div>

          {[
            { name: "Psihoterapie individuală", duration: "50 min", price: "250 RON", objectives: ["Anxietate", "Depresie", "Stres"] },
            { name: "Consiliere psihologică", duration: "50 min", price: "200 RON", objectives: ["Dezvoltare personală", "Relații"] },
            { name: "Terapie de cuplu", duration: "80 min", price: "350 RON", objectives: ["Comunicare", "Conflicte", "Intimitate"] },
          ].map((service) => (
            <Card key={service.name}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{service.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {service.duration} · {service.price}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.objectives.map((obj) => (
                        <Badge key={obj} variant="outline" className="text-xs">
                          {obj}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {editing && (
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Pregătire */}
        <TabsContent value="pregatire" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Educație și certificări</h3>
            {editing && (
              <Button size="sm" className="gap-1.5">
                <Plus className="h-4 w-4" /> Adaugă
              </Button>
            )}
          </div>

          {[
            { title: "Master Psihologie Clinică", institution: "Universitatea București", year: "2014" },
            { title: "Formare Psihoterapie CBT", institution: "Institutul de Psihoterapie Integrativă", year: "2016" },
            { title: "Certificare Mindfulness-Based CBT", institution: "Oxford Mindfulness Centre", year: "2019" },
          ].map((edu) => (
            <Card key={edu.title}>
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{edu.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {edu.institution} · {edu.year}
                    </div>
                  </div>
                </div>
                {editing && (
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Disponibilitate */}
        <TabsContent value="disponibilitate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Program săptămânal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { day: "Luni", hours: "09:00 – 17:00", active: true },
                  { day: "Marți", hours: "09:00 – 17:00", active: true },
                  { day: "Miercuri", hours: "10:00 – 18:00", active: true },
                  { day: "Joi", hours: "09:00 – 17:00", active: true },
                  { day: "Vineri", hours: "09:00 – 14:00", active: true },
                  { day: "Sâmbătă", hours: "—", active: false },
                  { day: "Duminică", hours: "—", active: false },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Switch
                        defaultChecked={schedule.active}
                        disabled={!editing}
                      />
                      <span className="w-24 font-medium">{schedule.day}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
