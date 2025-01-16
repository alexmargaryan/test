"use client";

import { useForm, UseFormReturn } from "react-hook-form";

import { useAuthControllerSignup } from "@/api/generated/queries";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignupSchema } from "./signupSchema";
import { SignupForm } from "./types";

interface UseSignupReturn {
  form: UseFormReturn<SignupForm>;
  isPending: boolean;
  onSubmit: (data: SignupForm) => void;
}

const useSignup = (): UseSignupReturn => {
  const { mutate: signup, isPending } = useAuthControllerSignup();

  const form = useForm<SignupForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    console.log("submit ====>", data);
    signup({ data });
  };

  return {
    form,
    isPending,
    onSubmit,
  };
};

export default useSignup;
