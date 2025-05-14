"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

//* Utils
import { useDebounce } from "use-debounce";
import { useMovies } from "~/repositories/movies/movies.repository";
import { useFilterStore } from "~/stores/filter.store";
import { config } from "~/utils/constants";
//* Components
import Skeleton from "~/components/Skeleton";

//* Assets
import Star from "~/assets/star.svg";
import Placeholder from "~/assets/placeholder.svg";

export default function MovieCardListClient() {
  const category = useFilterStore((s) => s.category);
  const page = useFilterStore((s) => s.page);
  const search = useFilterStore((s) => s.search);
  const [debouncedSearch] = useDebounce(search, 1000);
  const movies = useMovies({ page, category, search: debouncedSearch });
  return movies.data
    ? movies.data.results.map((x) => (
        <Link
          href={"/movies/" + x.id}
          className="border border-dark w-full h-72 md:h-80 rounded-lg self-center overflow-hidden bg-gray-100"
          key={x.id}
        >
          {x.backdrop_path ? (
            <Image
              src={config.baseImage + x.backdrop_path}
              alt={x.title}
              className="w-full"
              width={500}
              height={500}
            />
          ) : (
            <Image
              src={Placeholder}
              alt={x.title}
              className="w-full h-40 object-cover"
              width={500}
              height={500}
            />
          )}
          <div className="flex flex-col pl-3 pt-3 pr-2">
            <p className="text-dark font-semibold text-lg leading-tight mb-2 truncate">
              {x.original_title}
            </p>
            <div className="flex items-center">
              <Image
                alt="star"
                src={Star}
                width={12}
                height={12}
                className="mr-1"
              />
              <p className="text-sm text-dark">{Math.round(x.popularity)}</p>
            </div>
            <div className="sm:flex items-center">
              <p className="text-dark text-sm mr-2">Release date</p>
              <p className="text-dark text-sm">: {x.release_date}</p>
            </div>
            <div className="mt-1">
              <p className="line-clamp-2 md:line-clamp-1 flex-1 leading-tight">
                {x.overview}
              </p>
              <p className="text-sm mb-0.5 text-blue-500 whitespace-nowrap mt-0.5">
                Read More...
              </p>
            </div>
          </div>
        </Link>
      ))
    : Array.from(Array(6)).map((_, idx) => (
        <Fragment key={idx}>
          <Skeleton />
        </Fragment>
      ));
}
