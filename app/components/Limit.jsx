"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Limit = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const limit = Number(searchParams.get("limit")) || 10;
  const skip = Number(searchParams.get("skip")) || 0;

  const handleChange = (e) => {
    const newLimit = Number(e.target.value);
    router.push(`?limit=${newLimit}&skip=0`);
  };

  return (
    <div className="flex justify-end mb-6">
      <label htmlFor="limit" className="mr-2 text-gray-700 font-medium">
        Show:
      </label>
      <select
        id="limit"
        value={limit}
        onChange={handleChange}
        className="border border-gray-400 rounded-md px-3 py-1 text-gray-700 cursor-pointer"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Limit;
