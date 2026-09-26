'use client';
import React, { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { IWorkout } from '../../../types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';

const PlannedBtn = ({ workout }: { workout: IWorkout }) => {
  const { planned, setPlanned } = useContext(WorkoutContext) as {
    planned: IWorkout[];
    setPlanned: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handlePlannedBtn = (workout: IWorkout) => {
    setPlanned([...planned, workout]);
  };
  return (
    <div>
      <button
        onClick={() => handlePlannedBtn(workout)}
        className="flex items-center gap-2 rounded-md bg-[#b6ff00] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#a8ec00] cursor-pointer"
      >
        <FiCalendar size={11} />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default PlannedBtn;
