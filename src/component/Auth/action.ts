"use server";

import { type Route } from "next";
import { revalidatePath as revalidate } from "next/cache";
import { redirect } from "next/navigation";
import { kv } from "@vercel/kv";

export type AuthActionArgs = { redirectPath?: Route; revalidatePath: Route };

const KEY = "name";

export async function getUser() {
  const user = await kv.get<{ name: string }>(KEY);
  return user;
}

export async function handleSignIn({ redirectPath, revalidatePath }: AuthActionArgs) {
  await kv.set(KEY, { name: "しまぶー" });
  revalidate(revalidatePath);

  if (redirectPath) {
    redirect(redirectPath);
  }
}

export async function handleSignOut({ redirectPath, revalidatePath }: AuthActionArgs) {
  await kv.del(KEY);
  revalidate(revalidatePath);

  if (redirectPath) {
    redirect(redirectPath);
  }
}
