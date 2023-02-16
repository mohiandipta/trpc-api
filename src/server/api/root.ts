import { createTRPCRouter } from "./trpc";
import { subscribeRouter } from "./routers/subscribe";
import { notesRouter } from "./routers/mynotes";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  subscribe: subscribeRouter,
  mynotes: notesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
