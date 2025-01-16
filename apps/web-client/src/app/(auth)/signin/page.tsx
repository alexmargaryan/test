import SigninForm from "@/components/auth/signin/SigninForm";
import SigninGoogleForm from "@/components/auth/signin/SigninGooglForm";

export default function Signin() {
  return (
    <div className="flex flex-col gap-4">
      <SigninForm />
      <SigninGoogleForm />
    </div>
  );
}
