import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { type } from 'os'
import Project from './project'

export default function Projects() {
  return (
    <section>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                <Project {...project}/></React.Fragment>
            ))}
        </div>
    </section>
  )
}

