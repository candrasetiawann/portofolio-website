import React from 'react'
import { blogs } from '../lib/blogpost'
import Link from 'next/link'

const Blog = async () => {

  return (
    <div className='mt-24 flex-col px-8 md:px-0 text-white'>
      {blogs.map((post) => (
        <Link href={'/blog/' + post.slug}  passHref key={post.slug}>
        <div key={post.slug}>
          <h1 className='font-bold '>{post.meta.title}</h1>
          <h2>{post.meta.description}</h2>
          <h2>{post.meta.date}</h2>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog