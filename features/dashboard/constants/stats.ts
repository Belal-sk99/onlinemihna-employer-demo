import { Briefcase, Users, Clock, UserCheck } from "lucide-react";
import { MOCK_DASHBOARD_STATS } from "@/shared/lib/mock-data";

export const STATS = [
  {
    label: "Remaining Posts",
    value: `${MOCK_DASHBOARD_STATS.remainingPosts}/${MOCK_DASHBOARD_STATS.totalPosts}`,
    icon: Briefcase,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    label: "Applications",
    value: MOCK_DASHBOARD_STATS.totalApplications.toString(),
    icon: Users,
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    label: "Trial Days Left",
    value: MOCK_DASHBOARD_STATS.trialDaysLeft.toString(),
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    label: "Hired",
    value: MOCK_DASHBOARD_STATS.hiredCount.toString(),
    icon: UserCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];
