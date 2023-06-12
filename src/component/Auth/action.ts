"use server";

import { type Route } from "next";
import { revalidatePath as revalidate } from "next/cache";
import { redirect } from "next/navigation";
import { kv } from "@vercel/kv";

const KEY = "name";

export async function getUser() {
  const user = await kv.get<{ name: string }>(KEY);
  return user;
}

export type SignInArgs = { redirectPath?: Route; revalidatePath: Route };

export async function handleSignIn({ redirectPath, revalidatePath }: SignInArgs) {
  await kv.set(KEY, { name: "しまぶー" });
  revalidate(revalidatePath);

  if (redirectPath) {
    redirect(redirectPath);
  }
}

export type SignOutArgs = { redirectPath?: Route; revalidatePath?: Route };

export async function handleSignOut({ redirectPath, revalidatePath }: SignOutArgs) {
  await kv.del(KEY);

  if (revalidatePath) {
    revalidate(revalidatePath);
  }

  if (redirectPath) {
    redirect(redirectPath);
  }
}
