"use client";
import React from "react";
import Image from "next/image";

//* Utils
import { useMovie } from "~/repositories/movie/movie.repository";
import { config } from "~/utils/constants";

//* Assets
import Star from "~/assets/star.svg";

export default function MovieDetailClient({ movieId }: { movieId: string }) {
  const movie = useMovie(movieId);
  if (!movie.data) {
    return (
      <div className="container mx-auto flex flex-col items-center pt-5">
        <div className="bg-gray-300 rounded-lg animate-pulse w-[80vw] h-96" />
        <div className="flex space-x-4 mt-4">
          <div className="bg-gray-300 rounded-lg animate-pulse w-[30vw] h-8" />
          <div className="bg-gray-300 rounded-lg animate-pulse w-[30vw] h-8" />
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto flex flex-col items-center pt-5">
      <Image
        alt={movie.data?.title}
        src={config.baseImage + movie.data.backdrop_path}
        width={600}
        height={300}
        className="rounded-lg mb-4"
      />
      <p className="text-xl font-bold text-dark text-center">
        {movie.data.title}
      </p>
      <div className="sm:flex items-center my-2">
        <p className="text-dark text-sm mr-2">Release date</p>
        <p className="text-dark text-sm mr-4">: {movie.data.release_date}</p>
        <div className="flex items-center">
          <Image
            alt="star"
            src={Star}
            width={12}
            height={12}
            className="mr-1"
          />
          <p className="text-sm text-dark">
            {Math.round(movie.data.popularity)}
          </p>
        </div>
      </div>
      <p className="text-dark text-center mx-10">{movie.data.overview}</p>
      <a href={movie.data.homepage} className="text-blue-500 mt-2">
        {movie.data.homepage}
      </a>
      <div className="">
        <div className="mt-4">
          <p className="text-dark font-semibold mb-1">Production Company: </p>
          {movie.data.production_companies.map((x, idx) => (
            <div className="flex items-center space-x-4" key={x.id}>
              <p>
                {idx + 1}. {x.name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-dark font-semibold mb-1">Genres: </p>
          {movie.data.genres.map((x, idx) => (
            <div className="flex items-center space-x-4" key={x.id}>
              <p>
                {idx + 1}. {x.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
