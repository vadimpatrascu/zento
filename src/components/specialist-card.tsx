import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Star, Video, CheckCircle2 } from "lucide-react";
import {
  type Specialist,
  getSpecialistTypeLabel,
  getSpecialistTypeColor,
} from "@/lib/data";

export function SpecialistCard({ specialist }: { specialist: Specialist }) {
  const nextSlot = specialist.availability[0]?.slots[0];
  const nextDay = specialist.availability[0]?.day;

  return (
    <Card className="group transition-all hover:shadow-lg hover:-translate-y-0.5">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary sm:h-20 sm:w-20">
              {specialist.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            {specialist.verified && (
              <CheckCircle2 className="absolute -bottom-0.5 -right-0.5 h-5 w-5 fill-primary text-primary-foreground" />
            )}
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/specialist/${specialist.slug}`}
                className="text-lg font-semibold transition-colors hover:text-primary"
              >
                {specialist.name}
              </Link>
              <Badge
                variant="secondary"
                className={getSpecialistTypeColor(specialist.type)}
              >
                {getSpecialistTypeLabel(specialist.type)}
              </Badge>
            </div>

            <p className="mt-0.5 text-sm text-muted-foreground">
              {specialist.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <strong className="text-foreground">{specialist.rating}</strong>
                <span>({specialist.reviewCount})</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {specialist.city}
              </span>
              {specialist.online && (
                <span className="flex items-center gap-1 text-primary">
                  <Video className="h-3.5 w-3.5" />
                  Online
                </span>
              )}
              <span>{specialist.experience} ani experiență</span>
            </div>
          </div>

          {/* Price */}
          <div className="hidden flex-shrink-0 text-right sm:block">
            <div className="text-lg font-semibold">
              {specialist.priceMin}–{specialist.priceMax}
            </div>
            <div className="text-xs text-muted-foreground">
              {specialist.currency} / ședință
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {specialist.specializations.slice(0, 4).map((spec) => (
            <Badge key={spec} variant="outline" className="text-xs font-normal">
              {spec}
            </Badge>
          ))}
          {specialist.specializations.length > 4 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{specialist.specializations.length - 4}
            </Badge>
          )}
        </div>

        {/* Bio preview */}
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {specialist.shortBio}
        </p>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
            <Calendar className="h-3.5 w-3.5" />
            {nextDay && nextSlot ? (
              <span>
                Disponibil: <strong>{nextDay}</strong> la{" "}
                <strong>{nextSlot}</strong>
              </span>
            ) : (
              <span>Verifică disponibilitatea</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/specialist/${specialist.slug}`}>Profil</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/specialist/${specialist.slug}#programare`}>
                Programează
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
