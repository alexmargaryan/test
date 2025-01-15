import SigninForm from "@/components/auth/signin/signin-form";
import SigninGoogleForm from "@/components/auth/signin/signin-google-form";

export default function Signin() {
  return (
    <div className="flex flex-col gap-4">
      <SigninForm />
      <SigninGoogleForm />
    </div>
  );
}
