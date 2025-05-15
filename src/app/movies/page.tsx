"use server";
import Image from "next/image";
import Link from "next/link";
//* Assets
import Logo from "~/assets/logo.svg";

//* Components
import MovieListClient from "./MovieCardList.client";
import SidebarClient from "./Sidebar.client";
import PaginationClient from "./Pagination.client";
import SearchClient from "./Search.client";

export default async function MoviesPage() {
  return (
    <div className="h-screen overflow-auto">
      <div className="bg-satu w-full h-24 shadow px-10 flex items-center justify-end md:justify-center sticky top-0 z-50">
        <Link href="/">
          <Image
            alt="logo"
            src={Logo}
            priority
            className="fixed left-5 z-5 top-9"
          />
        </Link>
        <SearchClient />
      </div>
      <div className="sm:flex sm:space-x-6 pt-4 px-4 w-full">
        <div className="w-full md:w-80 mb-4">
          <SidebarClient />
        </div>
        <div className="flex-1 inline-grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <MovieListClient />
        </div>
      </div>
      <PaginationClient />
    </div>
  );
}
