'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IWorkout } from '../../types/workout';

const NavPlanBtn = () => {
  const { planned } = useContext(WorkoutContext) as {
    planned: IWorkout[];
  };
  return (
    <div>
      <Link
        href="/my-plans"
        className="flex items-center gap-2 text-[#a5a6aa] hover:text-white"
      >
        <span>Plan</span>
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[9px] font-bold text-black">
          {planned.length}
        </span>
      </Link>
    </div>
  );
};

export default NavPlanBtn;
