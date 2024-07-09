import React from "react";

export default function Footer() {
  return (
    <footer className="mb-8 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Soulaimane. All rights reserved.
      </small>
      <p className="text-xs ">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-center  text-5xl md:text-6xl lg:text-[14rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-slate-950 to-neutral-200 dark:to-[#3a8557] inset-x-0">
        SOULAIMANE</p>
    </footer>
  );
}