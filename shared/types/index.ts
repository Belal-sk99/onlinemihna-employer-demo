export type JobType = "full-time" | "part-time" | "gig";

export type JobStatus = "published" | "draft" | "closed";

export interface Job {
  id: string;
  title: string;
  type: JobType;
  status: JobStatus;
  salary: string;
  hoursPerWeek: number;
  applicationsCount: number;
  createdAt: string;
}

export interface DashboardStats {
  remainingPosts: number;
  totalPosts: number;
  trialDaysLeft: number;
  totalApplications: number;
  activeJobs: number;
  hiredCount: number;
}

export interface TrialSignupData {
  companyName: string;
  email: string;
  jobTitle: string;
}
