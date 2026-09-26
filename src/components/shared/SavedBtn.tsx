'use client';

import React, { useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { IWorkout } from '../../../types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const SavedBtn = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    
  };

  const isSaved =
    saved.some(item => item.id === workout.id) 

  const handleSavedBtn = () => {
    if (isSaved) {
      toast.info('This workout is already saved', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'dark',
      });

      return;
    }

    setSaved(current => [...current, workout]);

    toast.success('Saved for later', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    });
  };

  return (
    <button
      onClick={handleSavedBtn}
      className="flex cursor-pointer items-center gap-2 rounded-md border border-[#30343c] px-4 py-2 text-[10px] text-gray-300 transition hover:bg-[#171a20]"
    >
      <FiBookmark size={10} />
      Save for later
    </button>
  );
};

export default SavedBtn;
