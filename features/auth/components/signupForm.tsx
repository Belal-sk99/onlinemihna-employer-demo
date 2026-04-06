"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { signupFormSchema, type SignupFormValues } from "@/shared/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FIELDS } from "@/features/auth/constants/signup";

export function SignupForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: standardSchemaResolver(signupFormSchema),
  });

  function onSubmit(data: SignupFormValues) {
    startTransition(() => {
      try {
        localStorage.setItem("employer-signup", JSON.stringify(data));
      } catch {
        // localStorage unavailable — continue anyway
      }
      toast.success("Account created! Redirecting to login...");
    });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Start Your Free Trial
        </CardTitle>
        <CardDescription>
          7 days of full access. No credit card required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {FIELDS.map(({ name, label, type, placeholder }) => (
            <fieldset key={name} className="space-y-1.5">
              <Label htmlFor={name}>{label}</Label>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                aria-invalid={!!errors[name]}
                className="h-10"
                {...register(name)}
              />
              {errors[name] && (
                <p className="text-sm text-destructive">
                  {errors[name]?.message}
                </p>
              )}
            </fieldset>
          ))}

          <Button
            type="submit"
            disabled={isPending}
            className="h-11 w-full rounded-full bg-brand-green text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green-hover hover:shadow-lg active:translate-y-0"
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
