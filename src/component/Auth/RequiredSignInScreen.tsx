import Image from "next/image";

import girl1 from "public/img/girl1.webp";
import girl2 from "public/img/girl2.webp";

import { type SignInArgs } from "./action";
import { AuthAppleButton } from "./AuthAppleButton";
import { AuthGoogleButton } from "./AuthGoogleButton";

type RequiredSignInScreenProps = SignInArgs & { img?: "girl1" | "girl2" };

export function RequiredSignInScreen({ img = "girl1", ...rest }: RequiredSignInScreenProps) {
  return (
    <div className="p-4 text-center">
      <div className="mx-auto w-1/2">
        <Image
          src={img === "girl1" ? girl1 : girl2}
          alt="Required Sign In"
          className="select-none"
        />
      </div>

      <h1 className="mt-2 font-bold">ログインをお願いします</h1>
      <p className="mt-2 text-sm">こちらの機能を利用するにはログインが必要です</p>

      <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
        <AuthGoogleButton {...rest} />
        <AuthAppleButton {...rest} />
      </div>

      <div className="mt-4 text-xs">↑ cookiesを使ってログインっぽい挙動にしてます ↑</div>
    </div>
  );
}
