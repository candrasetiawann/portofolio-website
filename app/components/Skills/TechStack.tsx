

import React from 'react'


const datas = [
  {
    title: "Languages",
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: "Framework",
    tech: ['Bootstrap ', 'Tailwind', 'Next JS'],
  },
  {
    title: "Library",
    tech: ['React', 'Auth.js', 'Prisma', 'Zustand', 'Tanstack Query'],
  }
]

const TechStack = () => {
  return (
    <div>
      <h1 className='text-neutral-700 dark:text-indigo-600 font-bold text-xl '>Knowledge Base</h1>
      <p>Below are some of my favorite stacks </p>
      {datas.map((data) => (
        <div key={data.title} >
          <h2 className='text-neutral-700 dark:text-indigo-600 text-xl font-bold' >{data.title}</h2>
          <p>{data.tech.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default TechStack