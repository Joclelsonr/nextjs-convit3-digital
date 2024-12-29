"use server";

import { prisma } from "@/lib/prisma";

export async function getEvents(id: string): Promise<EventGuest | null> {
  const reponse = await prisma.event.findUnique({
    where: { id },
    include: { guests: true },
  });
  return reponse;
}
