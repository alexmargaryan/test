import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to get started",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="text-3xl">Create an account</p>
      {children}
    </div>
  );
}
