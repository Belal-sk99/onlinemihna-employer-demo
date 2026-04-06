import { z } from "zod";

export const signupFormSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be under 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  jobTitle: z
    .string()
    .min(3, "Job title must be at least 3 characters")
    .max(100, "Job title must be under 100 characters")
    .trim(),
});

export type SignupFormValues = z.infer<typeof signupFormSchema>;
