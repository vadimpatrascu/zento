import type { Metadata } from "next";
import { SpecialistCard } from "@/components/specialist-card";
import { DirectoryFilters } from "./filters";
import { mockSpecialists } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Caută specialist",
  description:
    "Găsește psihologi, coachi și mentori verificați din România. Filtre avansate, recenzii reale, programări online.",
};

export default function SpecialistiPage() {
  const specialists = mockSpecialists;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Search className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Caută specialist
            </h1>
            <p className="text-muted-foreground">
              <Badge variant="secondary" className="mr-2">
                {specialists.length} specialiști
              </Badge>
              verificați din toată România
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Filters sidebar */}
        <aside className="hidden lg:block">
          <DirectoryFilters />
        </aside>

        {/* Results */}
        <div className="space-y-4">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </div>
    </div>
  );
}
