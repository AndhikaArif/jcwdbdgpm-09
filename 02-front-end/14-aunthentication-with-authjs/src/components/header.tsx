import { auth } from "@/auth";
import { GoogleSignInButton } from "./google-sign-in-button";
import { SignOut } from "./sign-out";

export default async function Header() {
  const session = await auth();

  console.log(session);

  return (
    <header className="flex justify-between py-2 px-4 max-w-[1100px] mx-auto">
      <h1 className="text-xl font-bold font-montserrat">
        Auth.js Authentication
      </h1>
      {session ? <SignOut /> : <GoogleSignInButton />}
    </header>
  );
}
