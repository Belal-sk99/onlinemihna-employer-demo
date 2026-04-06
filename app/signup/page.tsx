import type { Metadata } from "next";
import { SignupForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Start Free Trial",
  description:
    "Create your employer account and start hiring verified remote professionals. 7-day free trial, no credit card required.",
};

export default function SignupPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <SignupForm />
    </main>
  );
}
