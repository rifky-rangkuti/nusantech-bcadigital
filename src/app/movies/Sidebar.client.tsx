"use client";
import React from "react";
import Radio from "~/components/Radio";
import { useFilterStore } from "~/stores/filter.store";

export default function SidebarClient() {
  const category = useFilterStore((s) => s.category);
  const setCategory = useFilterStore((s) => s.setCategory);
  const reset = useFilterStore((s) => s.reset);
  return (
    <div className="bg-white min-h-80 rounded-lg py-3 px-4 shadow-xl border border-dua sticky top-28 flex flex-col">
      <p className="text-2xl text-dark font-semibold">Categories</p>
      <div className="mt-5 flex flex-col space-y-2">
        <Radio
          label="NOW PLAYING"
          value="now-playing"
          isChecked={category === "now-playing"}
          handleChange={(v) => setCategory(v)}
        />
        <Radio
          label="POPULAR"
          value="popular"
          isChecked={category === "popular"}
          handleChange={(v) => setCategory(v)}
        />
        <Radio
          label="TOP RATED"
          value="top-rated"
          isChecked={category === "top-rated"}
          handleChange={(v) => setCategory(v)}
        />
        <Radio
          label="UPCOMING"
          value="upcoming"
          isChecked={category === "upcoming"}
          handleChange={(v) => setCategory(v)}
        />
      </div>
      <button
        onClick={() => void reset()}
        className="bg-satu hover:bg-dua text-white font-semibold px-4 py-2 rounded-lg mt-auto w-full"
      >
        Clear Filter
      </button>
    </div>
  );
}
