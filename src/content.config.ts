import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        tech: z.string(),
        livePreview: z.string().optional(),
        github: z.string().optional(),
        images: z.array(z.string()),
    }),
});

export const collections = { projects };
