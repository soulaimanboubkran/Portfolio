"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import FeaturesSectionDemo from './ui/card';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1); // Adjusting threshold to be more sensitive
  
  return (
    <section ref={ref} id='projects' className="relative z-30 scroll-mt-44 h-auto mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        <FeaturesSectionDemo grid={projectsData} /> {/* Pass projectsData directly */}
      </div>
    </section>
  );
}
