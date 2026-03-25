"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { objectives, cities, therapyTypes, languages } from "@/lib/data";

export function DirectoryFilters() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const specialistTypeOptions = [
    { value: "psiholog", label: "Psihologi" },
    { value: "coach", label: "Coachi" },
    { value: "mentor", label: "Mentori" },
  ];

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <SlidersHorizontal className="h-4 w-4" />
          Filtre
        </div>
        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
          Resetează
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Caută după nume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Specialist Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Tip specialist</Label>
        <div className="flex flex-wrap gap-2">
          {specialistTypeOptions.map((type) => (
            <Badge
              key={type.value}
              variant={
                selectedTypes.includes(type.value) ? "default" : "outline"
              }
              className="cursor-pointer transition-colors"
              onClick={() => toggleType(type.value)}
            >
              {type.label}
              {selectedTypes.includes(type.value) && (
                <X className="ml-1 h-3 w-3" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Online toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="online-toggle" className="text-sm font-medium">
          Doar ședințe online
        </Label>
        <Switch
          id="online-toggle"
          checked={onlineOnly}
          onCheckedChange={setOnlineOnly}
        />
      </div>

      <Separator />

      <Accordion
        defaultValue={["city", "objectives", "price"]}
        className="space-y-0"
      >
        {/* City */}
        <AccordionItem value="city">
          <AccordionTrigger className="py-3 text-sm font-medium">
            Oraș
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-48 space-y-2 overflow-y-auto pr-2">
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {city}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Objectives */}
        <AccordionItem value="objectives">
          <AccordionTrigger className="py-3 text-sm font-medium">
            Obiective
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-48 space-y-2 overflow-y-auto pr-2">
              {objectives.map((obj) => (
                <label
                  key={obj}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {obj}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Therapy Types */}
        <AccordionItem value="therapy-types">
          <AccordionTrigger className="py-3 text-sm font-medium">
            Tip serviciu
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-48 space-y-2 overflow-y-auto pr-2">
              {therapyTypes.map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {type}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="py-3 text-sm font-medium">
            Preț (RON / ședință)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={(val) => setPriceRange(Array.isArray(val) ? val : [val])}
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{priceRange[0]} RON</span>
                <span>{priceRange[1]} RON</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Languages */}
        <AccordionItem value="languages">
          <AccordionTrigger className="py-3 text-sm font-medium">
            Limbi vorbite
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {languages.map((lang) => (
                <label
                  key={lang}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {lang}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
