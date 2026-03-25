"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/specialisti", label: "Caută specialist" },
  { href: "/pentru-specialisti", label: "Pentru specialiști" },
  { href: "/pentru-companii", label: "Pentru companii" },
  { href: "/blog", label: "Blog" },
  { href: "/despre", label: "Despre noi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Zento</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/autentificare">Autentifică-te</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/inregistrare">Începe gratuit</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Meniu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setOpen(false)}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Leaf className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold tracking-tight">Zento</span>
              </Link>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="/autentificare" onClick={() => setOpen(false)}>
                    Autentifică-te
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/inregistrare" onClick={() => setOpen(false)}>
                    Începe gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
