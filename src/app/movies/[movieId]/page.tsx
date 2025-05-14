"use server";
import React from "react";
import Image from "next/image";
//* Assets
import Logo from "~/assets/logo.svg";
import MovieDetailClient from "./MovieDetail.client";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  return (
    <div className="h-screen overflow-auto">
      <div className="bg-satu w-full h-24 shadow px-10 flex items-center justify-end md:justify-center sticky top-0">
        <Image alt="logo" src={Logo} priority className="fixed left-5 z-5" />
      </div>
      <MovieDetailClient movieId={movieId} />
    </div>
  );
}
