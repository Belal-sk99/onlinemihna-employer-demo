"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEMES = ["light", "dark"] as const;

const THEME_ICON = {
  light: Sun,
  dark: Moon,
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const currentIndex = THEMES.indexOf(
    (theme as (typeof THEMES)[number]) ?? "system",
  );
  const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
  const Icon = THEME_ICON[(theme as keyof typeof THEME_ICON) ?? "system"];

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
