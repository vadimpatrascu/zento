import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  Globe,
  MapPin,
  MessageSquare,
  Share2,
  Star,
  Video,
} from "lucide-react";
import {
  getSpecialistBySlug,
  getSpecialistTypeLabel,
  getSpecialistTypeColor,
  mockSpecialists,
} from "@/lib/data";

export async function generateStaticParams() {
  return mockSpecialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) return { title: "Specialist negăsit" };

  return {
    title: `${specialist.name} — ${specialist.title}`,
    description: specialist.shortBio,
  };
}

export default async function SpecialistProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative flex-shrink-0">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-bold text-primary">
                {specialist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              {specialist.verified && (
                <CheckCircle2 className="absolute -bottom-1 -right-1 h-7 w-7 fill-primary text-primary-foreground" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {specialist.name}
                </h1>
                <Badge className={getSpecialistTypeColor(specialist.type)}>
                  {getSpecialistTypeLabel(specialist.type)}
                </Badge>
                {specialist.verified && (
                  <Badge
                    variant="secondary"
                    className="gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    <CheckCircle2 className="h-3 w-3" /> Verificat
                  </Badge>
                )}
              </div>

              <p className="mt-1 text-muted-foreground">{specialist.title}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <strong>{specialist.rating}</strong>
                  <span className="text-muted-foreground">
                    ({specialist.reviewCount} recenzii)
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {specialist.cities.join(", ")}
                </span>
                {specialist.online && (
                  <span className="flex items-center gap-1.5 text-primary">
                    <Video className="h-4 w-4" />
                    Ședințe online
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {specialist.languages.join(", ")}
                </span>
                <span className="text-muted-foreground">
                  {specialist.experience} ani experiență
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {specialist.specializations.map((spec) => (
                  <Badge
                    key={spec}
                    variant="outline"
                    className="text-xs font-normal"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Tabs */}
          <Tabs defaultValue="despre">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="despre">Despre</TabsTrigger>
              <TabsTrigger value="servicii">Servicii</TabsTrigger>
              <TabsTrigger value="pregatire">Pregătire</TabsTrigger>
              <TabsTrigger value="recenzii">
                Recenzii ({specialist.reviewCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="despre" className="mt-6">
              <div className="prose prose-neutral max-w-none dark:prose-invert">
                {specialist.bio.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="servicii" className="mt-6">
              <div className="space-y-4">
                {specialist.services.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{service.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {service.category}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {service.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {service.objectives.map((obj) => (
                              <Badge
                                key={obj}
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                {obj}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className="text-lg font-semibold">
                            {service.price} {service.currency}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {service.duration} min
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pregatire" className="mt-6">
              <div className="space-y-4">
                {specialist.education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">
                        {edu.institution} · {edu.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recenzii" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">{specialist.rating}</div>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.round(specialist.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {specialist.reviewCount} recenzii verificate
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  {/* Placeholder reviews */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          acum 2 săptămâni
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        &ldquo;Experiență extraordinară. M-a ajutat enorm să
                        înțeleg ce se întâmpla cu mine și mi-a dat instrumente
                        practice. Recomand cu toată încrederea!&rdquo;
                      </p>
                      <div className="mt-2 text-sm font-medium">Maria D.</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar — Booking & Actions */}
        <div className="space-y-6">
          <Card className="sticky top-24" id="programare">
            <CardHeader>
              <CardTitle className="text-lg">Programează o ședință</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {specialist.priceMin}–{specialist.priceMax}{" "}
                  {specialist.currency}
                </div>
                <div className="text-sm text-muted-foreground">per ședință</div>
              </div>

              <Separator />

              {/* Next available */}
              <div>
                <div className="mb-3 text-sm font-medium">
                  Primele disponibilități:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {specialist.availability.slice(0, 3).flatMap((day) =>
                    day.slots.slice(0, 2).map((slot) => (
                      <Button
                        key={`${day.day}-${slot}`}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        <Calendar className="mr-1 h-3 w-3" />
                        {day.day} {slot}
                      </Button>
                    ))
                  )}
                </div>
                <Button variant="link" size="sm" className="mt-2 w-full text-xs">
                  Vezi toate disponibilitățile →
                </Button>
              </div>

              <Button className="w-full gap-2" size="lg">
                <Calendar className="h-4 w-4" />
                Programează acum
              </Button>

              <Button variant="outline" className="w-full gap-2">
                <MessageSquare className="h-4 w-4" />
                Trimite un mesaj
              </Button>

              <Button
                variant="ghost"
                className="w-full gap-2 text-muted-foreground"
              >
                <Share2 className="h-4 w-4" />
                Recomandă unui prieten
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
