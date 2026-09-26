'use client';
import React, { useContext } from 'react';
import { FiBookmark,} from 'react-icons/fi';
import { IWorkout } from '../../../types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';

const SavedBtn = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleSavedBtn = (workout: IWorkout) => {
    setSaved([...saved, workout]);
  };
  return (
    <div>
      <button
        onClick={() => handleSavedBtn(workout)}
        className="flex items-center gap-2 rounded-md border border-[#30343c] px-4 py-2 text-[10px] text-gray-300 transition hover:bg-[#171a20] cursor-pointer"
      >
        <FiBookmark size={10} />
        Save for later
      </button>
    </div>
  );
};

export default SavedBtn;
