import { auth } from "@/lib/auth";
import { Event } from "@prisma/client";
import Link from "next/link";

import { Loading } from "@/components/loading";
import { CustomCard } from "./_components/custom-card";
import { CustomPagination } from "@/components/custom-pagination";

import { getEvents } from "./_actions";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: Props) {
  const session = await auth();
  const userId = session?.user?.id;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const perPage = 2;

  const { events, totalEvents } = await getEvents(
    userId as string,
    currentPage,
    perPage
  );

  const totalPages = Math.ceil(totalEvents / perPage);

  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center bg-[url('/background-elements.svg')] bg-cover">
      <div className="flex items-center justify-between max-w-4xl w-full">
        <h1 className="text-2xl text-zinc-200">Seus Eventos</h1>
        <Link
          href="/app/event"
          className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Criar novo evento
        </Link>
      </div>

      <div className="max-w-4xl w-full flex justify-around gap-4">
        {!events && <Loading />}
        {events && events.length === 0 && (
          <div className="flex items-center justify-center w-full mt-20">
            <h1 className="text-zinc-200 text-lg">
              Você ainda não tem eventos criados.
            </h1>
          </div>
        )}
        {events.map((event: Event) => (
          <Link href={`/app/event/${event.id}/details`} key={event.id}>
            <CustomCard {...event} />
          </Link>
        ))}
      </div>

      <div className="max-w-4xl w-full flex justify-center">
        {events && events.length > 0 && (
          <CustomPagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
}
