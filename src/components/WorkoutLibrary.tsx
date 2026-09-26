import React from 'react';
import { IWorkout } from '../../types/workout';
import WorkoutCard from './shared/WorkoutCard';

const getLibrary = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data as IWorkout[];
}

const WorkoutLibrary = async() => {
  const workouts = await getLibrary();
  console.log(workouts)
  return (
    <div className="container mx-auto px-4 sm:px-12 my-12">
      <h2 className="text-3xl text-white font-bold">THE LIBRARY</h2>
      <p className="text-sm text-[#9CA3AF] mt-2 mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 hover:border-amber-400 ">
        {workouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;