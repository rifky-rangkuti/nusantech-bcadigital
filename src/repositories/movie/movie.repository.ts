import { useQuery } from "@tanstack/react-query";
import { config } from "~/utils/constants";
import { MovieDetailResType } from "./movie.type";

export const useMovie = (movieId: string) => {
  const path = "/movie/";
  const token = process.env.NEXT_PUBLIC_TOKEN;
  return useQuery<MovieDetailResType>({
    queryKey: [path, movieId],
    queryFn: () =>
      fetch(config.baseApi + path + movieId, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json()),
    enabled: !!movieId,
  });
};
