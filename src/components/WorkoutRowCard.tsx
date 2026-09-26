import React from 'react';
import Image from 'next/image';
import { FiClock, FiStar, FiCheckCircle } from 'react-icons/fi';
import { IoFlameOutline } from 'react-icons/io5';
import { IWorkout } from '../../types/workout';


interface IWorkoutRowProps {
  workout: IWorkout;
  showDoneButton: boolean;
  removeWorkout: () => void;
  markAsDone: () => void;
}

const WorkoutRow = ({
  workout,
  showDoneButton,
  removeWorkout,
  markAsDone,
}: IWorkoutRowProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#252932] px-6 py-5 last:border-b-0">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="text-xs text-gray-500">{workout.equipment}</p>

          <div className="mt-1 flex gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FiClock size={11} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <IoFlameOutline size={13} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FiStar size={11} />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <button className="rounded-md border border-[#30343c] px-4 py-2 text-[11px] font-bold text-gray-200 hover:bg-[#1d2027]">
          View Details
        </button>

        {showDoneButton && (
          <button
            onClick={markAsDone}
            className="flex items-center gap-1 rounded-md bg-[#b6ff00] px-4 py-2 text-[11px] font-bold text-black hover:bg-[#a8ec00]"
          >
            <FiCheckCircle size={12} />
            Mark as Done
          </button>
        )}

        <button
          onClick={removeWorkout}
          className="px-2 text-gray-500 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WorkoutRow;
