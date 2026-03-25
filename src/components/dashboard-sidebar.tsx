"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Calendar,
  FileText,
  Heart,
  Home,
  Leaf,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Acasă", icon: Home },
  { href: "/dashboard/clienti", label: "Clienți", icon: Users },
  { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
  { href: "/dashboard/mesaje", label: "Mesaje", icon: MessageSquare },
  { href: "/dashboard/dispozitie", label: "Dispoziție clienți", icon: Heart },
  { href: "/dashboard/teme", label: "Teme de lucru", icon: FileText },
  { href: "/dashboard/rapoarte", label: "Rapoarte", icon: BarChart3 },
  { href: "/dashboard/profil", label: "Profilul meu", icon: User },
  { href: "/dashboard/setari", label: "Setări", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2.5 border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Zento</span>
        </Link>
        <span className="ml-auto rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
          Pro
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/dashboard" && pathname.startsWith(link.href));
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

      {/* User */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            DA
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="truncate text-sm font-medium">Dr. Ana Popescu</div>
            <div className="truncate text-xs text-muted-foreground">
              Psiholog
            </div>
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
