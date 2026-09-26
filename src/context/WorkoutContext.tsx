'use client';
import React, { createContext, useState } from 'react';
import { IWorkout } from '../../types/workout';

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [planned, setPlanned] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const sharedData = {
    planned,
    setPlanned,
    saved,
    setSaved,
  };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
