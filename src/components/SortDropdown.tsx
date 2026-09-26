import React from 'react';

interface ISortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortDropdown = ({ sortBy, setSortBy }: ISortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-gray-400">Sort By</label>

      <select
        value={sortBy}
        onChange={event => setSortBy(event.target.value)}
        className="rounded-md border border-[#252932] bg-[#15171c] px-3 py-2 text-xs text-white"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
