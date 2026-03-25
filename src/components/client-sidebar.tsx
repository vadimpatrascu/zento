"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Calendar,
  Heart,
  Home,
  Leaf,
  LogOut,
  MessageSquare,
  Pencil,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

const clientLinks = [
  { href: "/client", label: "Acasă", icon: Home },
  { href: "/client/sedinte", label: "Ședințele mele", icon: Calendar },
  { href: "/client/mesaje", label: "Mesaje", icon: MessageSquare },
  { href: "/client/jurnal", label: "Jurnal", icon: Pencil },
  { href: "/client/dispozitie", label: "Starea mea", icon: Heart },
  { href: "/client/teme", label: "Teme de lucru", icon: BookOpen },
  { href: "/client/ai-asistent", label: "Asistent AI", icon: Sparkles },
  { href: "/specialisti", label: "Caută specialist", icon: Search },
];

export function ClientSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center gap-2.5 border-b px-6">
        <Link href="/client" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Zento</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {clientLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/client" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            MD
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="truncate text-sm font-medium">Maria Dragomir</div>
            <div className="truncate text-xs text-muted-foreground">Client</div>
          </div>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
