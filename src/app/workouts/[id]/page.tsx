import React from 'react';
import { IWorkout } from '../../../../types/workout';
import { FiCheckCircle, FiClock, FiStar } from 'react-icons/fi';
import { IoFlameOutline } from 'react-icons/io5';
import Image from 'next/image';
import PlannedBtn from '@/components/shared/PlannedBtn';
import SavedBtn from '@/components/shared/PlannedBtn';

interface IWorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getLibrary = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data as IWorkout[];
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const workouts = await getLibrary();

  const workout = workouts.find(
    (workout: IWorkout) => workout.id === Number(id),
  ) as IWorkout;

  return (
    <section className=" container mx-auto my-12 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            {workout.name}
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {workout.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map(muscle => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[9px] font-extrabold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#252932] bg-[#15171c]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Equipment
              </span>
              <span className="text-xs text-gray-300">{workout.equipment}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Difficulty
              </span>
              <span className="text-xs text-gray-300">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Sets
              </span>
              <span className="text-xs text-gray-300">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Reps
              </span>
              <span className="text-xs text-gray-300">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Duration
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <FiClock size={11} />
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Calories
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <IoFlameOutline size={13} />
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                Rating
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <FiStar size={11} />
                {workout.rating}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[10px] leading-relaxed text-gray-400"
                >
                  <span className="mt-0.5 text-gray-500">
                    <FiCheckCircle size={11} />
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <PlannedBtn workout={workout} />
            <SavedBtn workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
