import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center py-4">
      <SignIn />
    </div>
  );
}
