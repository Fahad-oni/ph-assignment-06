'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { IWorkout } from '../../../types/workout';

const PLannedPage = () => {
  const { planned, saved } = useContext(
    WorkoutContext,
  ) as {
    planned: IWorkout[];
    saved: IWorkout[];
  };
  return (
    <div>
      <h1>{planned.length}
        {saved.length}
      </h1>
    </div>
  );
};

export default PLannedPage;
