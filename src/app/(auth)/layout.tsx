import Link from "next/link";
import { Leaf } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — branding */}
      <div className="hidden w-1/2 flex-col justify-between bg-primary p-12 text-primary-foreground lg:flex">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
            <Leaf className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Zento</span>
        </Link>

        <div>
          <blockquote className="text-xl leading-relaxed">
            &ldquo;Zento m-a ajutat să găsesc specialistul perfect în doar 5
            minute. Procesul de programare e incredibil de simplu.&rdquo;
          </blockquote>
          <div className="mt-4 text-primary-foreground/70">
            — Maria D., Client Zento
          </div>
        </div>

        <div className="text-sm text-primary-foreground/50">
          © 2026 Zento. Toate drepturile rezervate.
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
