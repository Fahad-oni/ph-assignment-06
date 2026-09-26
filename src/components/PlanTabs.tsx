import React from 'react';

interface IPlanTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PlanTabs = ({ activeTab, setActiveTab }: IPlanTabsProps) => {
  return (
    <div className="flex gap-1 rounded-lg border border-[#252932] bg-[#15171c] p-1">
      <button
        onClick={() => setActiveTab('plan')}
        className={`rounded-md px-4 py-2 text-xs font-bold uppercase ${
          activeTab === 'plan' ? 'bg-[#1d2027] text-[#b6ff00]' : 'text-gray-500'
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => setActiveTab('saved')}
        className={`rounded-md px-4 py-2 text-xs font-bold uppercase ${
          activeTab === 'saved'
            ? 'bg-[#1d2027] text-[#b6ff00]'
            : 'text-gray-500'
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;
