import type { Metadata } from "next";
import { ContactForm } from "./form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează echipa Zento. Suntem aici să te ajutăm.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@zento.ro", href: "mailto:contact@zento.ro" },
  { icon: Phone, label: "Telefon", value: "+40 720 000 000", href: "tel:+40720000000" },
  { icon: MapPin, label: "Adresă", value: "București, România", href: null },
  { icon: Clock, label: "Program", value: "Luni–Vineri, 09:00–18:00", href: null },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contactează-ne
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ai o întrebare, sugestie sau ai nevoie de ajutor? Scrie-ne și te
          contactăm în maxim 24 de ore.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-4">
          {contactInfo.map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <div className="text-sm font-medium">Linie de criză</div>
              <a
                href="tel:0800801200"
                className="mt-1 text-lg font-bold text-primary"
              >
                0800 801 200
              </a>
              <div className="mt-1 text-xs text-muted-foreground">
                Gratuit, 24/7, confidențial
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
