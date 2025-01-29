import { defineCollection, z } from "astro:content";

const about = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    resume: z.string(),
    lang: z.enum(["en", "es", "fr", "de", "nl"]),
  }),
});

const contact = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "es", "fr", "de", "nl"]),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "es", "fr", "de", "nl"]),
    projects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        link: z.string(),
        languages: z.array(z.object({ language: z.string() })),
      })
    ),
  }),
});

const education = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string(),
    training: z.array(
      z.object({
        name: z.string(),
        school: z.string(),
        from: z.string(),
        to: z.string(),
        description: z.string(),
        skills: z.array(z.object({ skill: z.string() })),
      })
    ),
    certifications: z.array(
      z.object({
        name: z.string(),
        taughtBy: z.string(),
      })
    ),
  }),
});

export const collections = {
  about,
  contact,
  projects,
  education,
};
