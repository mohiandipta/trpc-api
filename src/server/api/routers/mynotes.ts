import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc"

export const notesRouter = createTRPCRouter({
    newNote: publicProcedure.input(
        z.object({
            title: z.string().min(5, { message: 'Must be 5 or more characters of length!' }).trim(),
            description: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                return await ctx.prisma.notes.create({
                    data: {
                        title: input.title,
                        description: input.description
                    }
                })
            } catch (error) {
                console.log(`Notes can not be created ${error}`)
            }
        })
})