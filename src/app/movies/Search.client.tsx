"use client";
import Image from "next/image";
import React from "react";
import Search from "~/assets/search.svg";
import { useFilterStore } from "~/stores/filter.store";

export default function SearchClient() {
  const search = useFilterStore((s) => s.search);
  const setSearch = useFilterStore((s) => s.setSearch);
  return (
    <div className="pl-2 w-42 sm:w-64 md:w-72 h-10 bg-white rounded-lg border border-dark relative">
      <Image
        alt=""
        src={Search}
        width={16}
        height={16}
        className="absolute top-1/2 right-2.5 -translate-y-1/2"
      />
      <input
        type="text"
        className="w-full h-full text-sm placeholder:text-gray-400"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
