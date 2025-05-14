"use client";
import React from "react";

export default function Radio({
  label,
  value,
  handleChange,
  isChecked,
}: {
  label: string;
  value: string;
  handleChange: (v: string) => void;
  isChecked: boolean;
}) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id="categories"
        name="categories"
        className="w-4 h-4 text-dua bg-gray-100 border-gray-300 focus:ring-dua dark:focus:ring-dua dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        value={value}
        checked={isChecked}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <label className="ml-2 text-sm font-medium text-dark">{label}</label>
    </div>
  );
}
