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

export default async function Home() {
  return (
    <div className="h-screen overflow-auto">
      <div className="bg-satu w-full h-24 shadow px-10 flex items-center justify-end md:justify-center sticky top-0">
        <Link href="/">
          <Image alt="logo" src={Logo} priority className="fixed left-5 z-5" />
        </Link>
        <SearchClient />
      </div>
      <div className="flex space-x-6 pt-4 px-4 w-full">
        <div className="hidden md:block md:w-80">
          <SidebarClient />
          <PaginationClient />
        </div>
        <div className="flex-1 inline-grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <MovieListClient />
        </div>
      </div>
    </div>
  );
}
