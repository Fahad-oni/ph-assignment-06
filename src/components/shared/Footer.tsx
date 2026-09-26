import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="mx-auto container flex flex-wrap gap-4 items-center justify-between px-4 lg:px-12 mb-8">
        <div className="flex items-center gap-2">
          <Link href="/" className=" flex gap-2 text-2xl font-bold">
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

        <p className="text-xs text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
