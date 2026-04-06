"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { MOCK_DASHBOARD_STATS } from "@/shared/lib/mock-data";

export function DashboardHeader() {
  const [companyName, setCompanyName] = useState("Your Company");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("employer-signup");
      if (stored) {
        const data = JSON.parse(stored);
        if (data.companyName) setCompanyName(data.companyName);
      }
    } catch {}
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {companyName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Employer Dashboard</p>
      </div>
      <Badge
        variant="outline"
        className="w-fit gap-1.5 border-brand-blue/30 bg-brand-blue/5 px-3 py-1.5 text-sm font-medium text-brand-blue"
      >
        <Clock className="h-3.5 w-3.5" />
        Trial: {MOCK_DASHBOARD_STATS.trialDaysLeft} days left
      </Badge>
    </div>
  );
}
