import { Job, TrialInfo, DashboardStats } from "@/shared/types";

export const mockTrialInfo: TrialInfo = {
  daysRemaining: 5,
  totalDays: 7,
  startDate: "2026-04-04",
  endDate: "2026-04-11",
  plan: "free-trial",
};

export const mockStats: DashboardStats = {
  jobPostsUsed: 2,
  jobPostsLimit: 5,
  totalApplicants: 18,
  newApplicantsToday: 3,
  messagesUnread: 4,
};

export const mockJobs: Job[] = [
  {
    id: "job_01",
    title: "Senior React Developer",
    type: "full-time",
    status: "published",
    applicants: 12,
    hoursPerWeek: 40,
    salary: "$2,500 - $3,500/mo",
    createdAt: "2026-04-04",
  },
  {
    id: "job_02",
    title: "Customer Support Specialist (Arabic/English)",
    type: "full-time",
    status: "published",
    applicants: 6,
    hoursPerWeek: 40,
    salary: "$1,200 - $1,800/mo",
    createdAt: "2026-04-05",
  },
  {
    id: "job_03",
    title: "Social Media Manager",
    type: "part-time",
    status: "draft",
    applicants: 0,
    hoursPerWeek: 20,
    salary: "$800 - $1,200/mo",
    createdAt: "2026-04-06",
  },
  {
    id: "job_04",
    title: "Bookkeeper & Financial Assistant",
    type: "part-time",
    status: "closed",
    applicants: 9,
    hoursPerWeek: 25,
    salary: "$1,000 - $1,500/mo",
    createdAt: "2026-04-02",
  },
];
