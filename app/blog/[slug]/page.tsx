import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeHighlight from 'rehype-highlight'
import "@/app/assets/style/a11y-dark.css"

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('app/content'))

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', '')
  }))

  return paths
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join('app/content/', slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownFile)

  return {
    frontMatter, slug, content
  }
}

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeHighlight,
    ]
  }
}


export async function generateMetadata({ params }: any) {
  const blog = getPost(params)

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  }
}


export default function Post({ params }: any) {

  const props = getPost(params)
  return (
    <article className='mt-24 md:px-0 px-8 prose dark:prose-invert lg:prose-xl'>
      <h1>{props.frontMatter.title}</h1>
      <MDXRemote source={props.content} options={options} />
      <div className='mt-6 mb-6 '>
        <br />
      </div>
    </article>
  )
}