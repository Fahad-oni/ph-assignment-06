import React from 'react';
import { IWorkout } from '../../../types/workout';
import { FaRegClock, FaStar } from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';
import Image from 'next/image';

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#292c33] bg-[#15171c] text-white shadow-sm">
      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-fit"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Muscle Groups */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map(muscle => (
            <span
              key={muscle}
              className="rounded-full bg-[#b6ff00] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="truncate text-xs font-extrabold uppercase tracking-wide">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 truncate text-[9px] text-gray-400">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 h-px bg-[#24272d]" />

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-gray-400">
          <div className="flex items-center gap-1">
            <FaRegClock size={10} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1">
            <IoMdFlame size={10} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1">
            <FaStar size={10} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
