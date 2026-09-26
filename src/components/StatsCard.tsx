import React, { useContext } from "react";
import { IWorkout } from "../../types/workout";
import { WorkoutContext } from "@/context/WorkoutContext";

const StatsCard = () => {

  const { planned } = useContext(WorkoutContext) as {
    planned: IWorkout[];
  };
  const data = planned;
  const totalExercises = data.length;
  const totalMinutes = data.reduce(
    (sum, w) => sum + Number(w.duration || 0),
    0,
  );
  const totalCalories = data.reduce(
    (sum, w) => sum + Number(w.caloriesBurned || 0),
    0,
  );

  return (
    <div className="grid grid-cols-3 divide-x divide-[#252932] rounded-xl border border-[#252932] bg-[#15171c] px-6 py-5">
      <div className="flex flex-col gap-1 pr-4">
        <span className="text-xs text-gray-500">Exercises</span>
        <span className="text-3xl font-extrabold text-[#b6ff00]">
          {totalExercises}
        </span>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <span className="text-xs text-gray-500">Minutes</span>
        <span className="text-3xl font-extrabold text-white">
          {totalMinutes}
        </span>
      </div>
      <div className="flex flex-col gap-1 pl-4">
        <span className="text-xs text-gray-500">Calories</span>
        <span className="text-3xl font-extrabold text-white">
          {totalCalories}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;