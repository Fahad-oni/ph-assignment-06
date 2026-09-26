'use client';
import React, { useContext, useState } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '../../../types/workout';
import StatsCard from '@/components/StatsCard';
import PlanTabs from '@/components/PlanTabs';
import SortDropdown from '@/components/SortDropdown';
import WorkoutRow from '@/components/WorkoutRowCard';
import { toast } from 'react-toastify';

const MyPlanPage = () => {
  const { planned, setPlanned, saved, setSaved } = useContext(
    WorkoutContext,
  ) as {
    planned: IWorkout[];
    saved: IWorkout[];
    setPlanned: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const Planned = planned || [];
  const Saved = saved || [];

  const [activeTab, setActiveTab] = useState('plan');

  const [sortBy, setSortBy] = useState('duration');

  // Decide which data to show
  let workouts: IWorkout[] = activeTab === 'plan' ? Planned : Saved;

  // Sort workouts
  if (sortBy === 'duration') {
    workouts = [...workouts].sort(
      (a, b) => Number(a.duration) - Number(b.duration),
    );
  }

  if (sortBy === 'calories') {
    workouts = [...workouts].sort(
      (a, b) => Number(a.caloriesBurned) - Number(b.caloriesBurned),
    );
  }

  if (sortBy === 'rating') {
    workouts = [...workouts].sort(
      (a, b) => Number(b.rating) - Number(a.rating),
    );
  }


  const removeWorkout = (id: number) => {
    if (activeTab === 'plan') {
      setPlanned?.(planned.filter((workout: IWorkout) => workout.id !== id));
    } else {
      setSaved?.(saved.filter((workout: IWorkout) => workout.id !== id));
    }
  };

  const markAsDone = (id: number) => {
    setPlanned?.(planned.filter((workout: IWorkout) => workout.id !== id));
  };

  return (
    <section className="container mx-auto my-12 px-4 lg:px-12 text-white">
      <h1 className="text-3xl font-extrabold uppercase sm:text-4xl">My Plan</h1>

      <p className="mb-8 mt-4 text-sm text-gray-400 ">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <StatsCard />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-[#252932] bg-[#15171c]">
        {workouts.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-gray-500">
            {activeTab === 'plan'
              ? 'No workouts planned yet.'
              : 'No saved workouts yet.'}
          </p>
        ) : (
          workouts.map(workout => (
            <WorkoutRow
              key={workout.id}
              workout={workout}
              showDoneButton={activeTab === 'plan'}
              removeWorkout={() => removeWorkout(workout.id)}
              markAsDone={() => markAsDone(workout.id)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MyPlanPage;
