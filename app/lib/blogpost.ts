import fs from "fs"
import path from "path"
import matter from 'gray-matter'

const blogDir = path.join(process.cwd(),'app/content')



  //find all files
  const files = fs.readdirSync(blogDir)

  // for each blog found 
  export const blogs = files.map((filename) => {
    // read the content of the blog 
    const filePath = path.join(blogDir,filename)
    const fileContents = fs.readFileSync(filePath,'utf-8')

    // extract the metadata from the blog's content 
    const {data:frontMatter} = matter(fileContents)

    //return the metadata and page slug 
    return {
      meta:frontMatter,
      slug:filename.replace('.mdx','')
    }
  })

 