import { z, defineCollection } from "astro:content";

const membersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    role: z.enum(['Developer', 'Designer', 'Project Manager']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    blurb: z.string()
  })
})

export const collections = {
  'members': membersCollection
}