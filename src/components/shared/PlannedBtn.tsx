'use client';

import React, { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { IWorkout } from '../../../types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const PlannedBtn = ({ workout }: { workout: IWorkout }) => {
  const { planned, setPlanned } = useContext(WorkoutContext) as {
    planned: IWorkout[];
    setPlanned: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    
  };

  const isPlanned =
    planned.some(item => item.id === workout.id)

  const handlePlannedBtn = () => {
    if (isPlanned) {
      toast.info("This workout is already in today's plan", {
        position: 'top-right',
        autoClose: 2000,
        theme: 'dark',
      });

      return;
    }

    setPlanned(current => [...current, workout]);

    toast.success("Added to today's plan", {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    });
  };

  return (
    <button
      onClick={handlePlannedBtn}
      className="flex cursor-pointer items-center gap-2 rounded-md bg-[#b6ff00] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#a8ec00] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <FiCalendar size={11} />
      {isPlanned ? "Already in today's plan" : "Add to today's plan"}
    </button>
  );
};

export default PlannedBtn;
