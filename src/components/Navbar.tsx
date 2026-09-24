'use client';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: 'Workouts',
      href: '/workouts',
    },
    {
      name: 'My Plan',
      href: '/my-plans',
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map(link => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
                        isActive
                          ? 'bg-[#182600] text-[#b7ff00]'
                          : 'text-[#85878d] hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-lg">
            <Image
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-2">
            {navLinks.map(link => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
                    isActive
                      ? 'bg-[#182600] text-[#b7ff00]'
                      : 'text-[#85878d] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <Link
              href="/plan"
              className="flex items-center gap-2 text-[#a5a6aa] hover:text-white"
            >
              <span>Plan</span>
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[9px] font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/saved"
              className="flex items-center gap-2 text-[#777980] hover:text-white"
            >
              <span>Saved</span>
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#303238] px-1 text-[9px]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
