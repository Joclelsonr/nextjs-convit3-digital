"use server";

import { prisma } from "@/lib/prisma";

export async function getEvents(
  userId: string,
  page: number = 1,
  perPage: number = 2
) {
  const skip = (page - 1) * perPage;
  const events = await prisma.event.findMany({
    where: { userId },
    skip,
    take: perPage,
  });

  const totalEvents = await prisma.event.count({
    where: { userId },
  });

  return { events, totalEvents };
}
