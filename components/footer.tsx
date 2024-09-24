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
      <p className="text-xs mt-2">4.8.15.16.23.42</p>
    </footer>
  );
}