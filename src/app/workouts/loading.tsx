import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-xl"></span>

        <p className="text-sm font-medium text-gray-400">Loading workouts...</p>
      </div>
    </div>
  );
};

export default Loading;
