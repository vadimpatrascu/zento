"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold">Mesaj trimis!</h3>
        <p className="mt-2 text-muted-foreground">
          Îți mulțumim. Te contactăm în maxim 24 de ore.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Trimite alt mesaj
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nume complet *</Label>
          <Input id="name" required placeholder="Numele tău" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required placeholder="email@exemplu.ro" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subiect *</Label>
        <Input id="subject" required placeholder="Despre ce e vorba?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesaj *</Label>
        <Textarea
          id="message"
          required
          rows={5}
          placeholder="Scrie-ne mesajul tău..."
        />
      </div>

      <Button type="submit" className="w-full gap-2 sm:w-auto">
        <Send className="h-4 w-4" />
        Trimite mesajul
      </Button>
    </form>
  );
}
