"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

async function signinWithGoogle() {
  console.log("signinWithGoogle");
  window.location.href = "http://localhost:5000/api/auth/google/login";
}

const SigninGoogleForm = () => {
  return (
    <Button
      className="w-full border"
      variant="ghost"
      onClick={signinWithGoogle}
    >
      <Image
        src={"/images/google-logo.png"}
        alt="Google Logo"
        width={24}
        height={24}
        priority
      />
      <p>Sign in with Google</p>
    </Button>
  );
};

export default SigninGoogleForm;
