import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    })
  })
})

export const collections = {
  'services': servicesCollection
}