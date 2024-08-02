import { z, defineCollection } from "astro:content";

const componentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    created_at: z.date()
  })
})

const membersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.enum(['Developer', 'Designer', 'Project Manager']),
    // image: z.object({
    //   src: z.string(),
    //   alt: z.string(),
    // }),
    blurb: z.string()
  })
})

export const collections = {
  'components': componentsCollection,
  'members': membersCollection
}