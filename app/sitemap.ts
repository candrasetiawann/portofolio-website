import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://candrasetiawan.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://candrasetiawan.vercel.app/blog',
      lastModified: new Date(),
    },
  ]
}