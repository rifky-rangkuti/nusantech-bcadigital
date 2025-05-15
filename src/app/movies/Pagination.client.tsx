"use client";
import React from "react";
import { useFilterStore } from "~/stores/filter.store";

export default function Pagination() {
  const prevPage = useFilterStore((s) => s.prevPage);
  const nextPage = useFilterStore((s) => s.nextPage);
  return (
    <div className="flex space-x-2 w-full rounded-lg sticky top-[450px] p-4">
      <button
        onClick={() => prevPage()}
        className="flex-1 h-10 rounded-lg bg-satu text-sm font-semibold text-white disabled:bg-gray-300"
        disabled={true}
      >
        Previous
      </button>
      <button
        onClick={() => nextPage()}
        className="flex-1 h-10 rounded-lg bg-satu text-sm font-semibold text-white"
      >
        Next
      </button>
    </div>
  );
}
