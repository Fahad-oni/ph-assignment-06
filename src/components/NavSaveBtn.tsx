'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IWorkout } from '../../types/workout';

const NavSaveBtn = () => {
  const { saved } = useContext(WorkoutContext) as {
    saved: IWorkout[];
  };
  return (
    <div>
      <Link
        href="/my-plans"
        className="flex items-center gap-2 text-[#777980] hover:text-white"
      >
        <span>Saved</span>
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#303238] px-1 text-[9px]">
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default NavSaveBtn;
