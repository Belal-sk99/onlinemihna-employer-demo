import type { Metadata } from "next";
import Link from "next/link";
import { Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader, StatsCards, JobList } from "@/features/dashboard";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description:
    "Manage your job postings, review applications, and track your hiring pipeline.",
};

export default function DashboardPage() {
  return (
    <main className="flex-1 px-4 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl space-y-8">
        <DashboardHeader />
        <StatsCards />

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Jobs</h2>
          <Button
            disabled
            className="gap-2 rounded-full bg-brand-green px-5 text-sm font-semibold text-white opacity-60"
          >
            <Plus className="h-4 w-4" />
            Create New Job
          </Button>
        </div>

        <JobList />

        <div className="pt-4">
          <Button
            asChild
            variant="ghost"
            className="gap-2 text-muted-foreground"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
