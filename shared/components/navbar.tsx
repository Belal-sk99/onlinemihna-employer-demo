import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/shared/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="OnlineMihna"
            width={160}
            height={37}
            className="h-8 w-auto dark:invert md:h-9"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="h-9 rounded-full bg-brand-green px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green-hover hover:shadow-md active:translate-y-0"
          >
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
