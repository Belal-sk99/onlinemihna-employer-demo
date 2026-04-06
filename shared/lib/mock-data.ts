import type { Job, DashboardStats } from "@/shared/types";

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  remainingPosts: 2,
  totalPosts: 5,
  trialDaysLeft: 5,
  totalApplications: 27,
  activeJobs: 2,
  hiredCount: 1,
};

export const MOCK_JOBS: Job[] = [
  {
    id: "job_01",
    title: "Senior React Developer",
    type: "full-time",
    status: "published",
    salary: "$2,500 - $3,500/mo",
    hoursPerWeek: 40,
    applicationsCount: 12,
    createdAt: "2026-04-04T10:00:00Z",
  },
  {
    id: "job_02",
    title: "Customer Support Specialist (Arabic/English)",
    type: "full-time",
    status: "published",
    salary: "$1,200 - $1,800/mo",
    hoursPerWeek: 40,
    applicationsCount: 6,
    createdAt: "2026-04-05T14:30:00Z",
  },
  {
    id: "job_03",
    title: "Social Media Manager",
    type: "part-time",
    status: "draft",
    salary: "$800 - $1,200/mo",
    hoursPerWeek: 20,
    applicationsCount: 0,
    createdAt: "2026-04-06T09:15:00Z",
  },
  {
    id: "job_04",
    title: "Bookkeeper & Financial Assistant",
    type: "part-time",
    status: "closed",
    salary: "$1,000 - $1,500/mo",
    hoursPerWeek: 25,
    applicationsCount: 9,
    createdAt: "2026-04-02T08:45:00Z",
  },
];
