export type JobStatus = "published" | "draft" | "closed";
export type JobType = "full-time" | "part-time" | "gig";

export interface Job {
  id: string;
  title: string;
  type: JobType;
  status: JobStatus;
  applicants: number;
  hoursPerWeek: number;
  salary: string;
  createdAt: string;
}

export interface TrialInfo {
  daysRemaining: number;
  totalDays: number;
  startDate: string;
  endDate: string;
  plan: "free-trial";
}

export interface DashboardStats {
  jobPostsUsed: number;
  jobPostsLimit: number;
  totalApplicants: number;
  newApplicantsToday: number;
  messagesUnread: number;
}

export interface SignupFormData {
  companyName: string;
  email: string;
  jobTitle: string;
}
