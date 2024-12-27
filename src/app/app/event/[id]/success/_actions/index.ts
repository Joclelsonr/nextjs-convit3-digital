"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export async function getEvent(id: string): Promise<Event | null> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const event = await prisma.event.findUnique({
    where: {
      id,
      userId: session.user.id,
    },
  });
  return event;
}
