"use server";

import { prisma } from "@/lib/prisma";
import { Guest } from "@prisma/client";

export async function addGuest(guest: Guest) {
  try {
    const response = await prisma.guest.create({
      data: guest,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getEvent(alias: string) {
  try {
    const reponse = await prisma.event.findUnique({
      where: { alias },
    });

    return reponse;
  } catch (error) {
    console.log(error);
  }
}
