import { Event as PrismaEvent, Guest } from "@prisma/client";

declare global {
  type EventGuest = PrismaEvent & {
    guests: Guest[];
  };
}

// export {};
