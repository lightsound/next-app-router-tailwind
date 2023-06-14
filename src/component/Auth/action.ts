"use server";

import { type Route } from "next";
import { revalidatePath as revalidate } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const KEY = "name";

export async function getUser() {
  const user = cookies().get(KEY);
  return { name: user?.value };
}

export type SignInArgs = { redirectPath?: Route; revalidatePath: Route };

export async function handleSignIn({ redirectPath, revalidatePath }: SignInArgs) {
  cookies().set(KEY, "shimabu");
  revalidate(revalidatePath);

  if (redirectPath) {
    redirect(redirectPath);
  }
}

export type SignOutArgs = { redirectPath?: Route; revalidatePath?: Route };

export async function handleSignOut({ redirectPath, revalidatePath }: SignOutArgs) {
  cookies().delete(KEY);

  if (revalidatePath) {
    revalidate(revalidatePath);
  }

  if (redirectPath) {
    redirect(redirectPath);
  }
}
