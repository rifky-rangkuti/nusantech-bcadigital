"use server";
import { redirect } from "next/navigation";

export default async function MainPage() {
  redirect("/movies");

  return <></>;
}
