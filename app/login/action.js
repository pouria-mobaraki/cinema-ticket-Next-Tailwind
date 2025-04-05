"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(state, formData) {
  const username = formData.get("username");

  if (!username || username.trim() === "") {
    return { error: "نام کاربری وارد نشده است" };
  }

  // ست کردن کوکی
  cookies().set("user", username, {
    httpOnly: false,
    path: "/",
    maxAge: 60 * 60 * 24, // یک روز
  });

  redirect("/");
}
