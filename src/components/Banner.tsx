import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import banner from '../assets/banner.png';
const Banner = () => {
  return (
    <section className=" container mx-auto sm:px-12 my-10 ">
      <div className="rounded-md sm:rounded-2xl flex items-center gap-8 lg:h-screen bg-[#15171D] p-8 py-14 sm:px-10 md:py-16 lg:px-14">
        <div className=" grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="text-xs font-bold  text-[#C2F800]">
              WORKOUT LIBRARY
            </span>

            <h1 className="mt-4 text-4xl  font-bold  text-white sm:text-5xl">
              Train with intent.
              <br />
              Log every set.
            </h1>

            <p className="mt-5 max-w-md text-[15px] text-neutral-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="/workouts"
              className="mt-8 inline-block rounded-md bg-[#c6f135] px-5 py-3 text-xs font-bold  text-neutral-900 transition-colors hover:bg-[#d4fb52]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          <div className="hidden h-110 w-full items-center justify-end lg:flex">
            <Image
              src={banner}
              alt="Banner"
              width={400}
              height={400}
              className="h-full w-auto max-w-md rounded-2xl ml-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};



export default Banner;