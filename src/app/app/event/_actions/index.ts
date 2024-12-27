"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export async function saveEvent(event: Event) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await prisma.event.create({
      data: {
        ...event,
        userId: session.user.id as string,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function validateAlias(alias: string) {
  const response = await prisma.event.findUnique({
    where: { alias },
  });
  return response === null;
}
