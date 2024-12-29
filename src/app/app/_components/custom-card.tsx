import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Event } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CustomCard(props: Event) {
  return (
    <Card className="w-[430px] overflow-hidden border-zinc-700 shadow-md bg-transparent">
      <CardHeader className="p-0">
        <div
          className="h-40 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${props.imageBackground})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
            <h2 className="text-3xl font-bold text-white">{props.name}</h2>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-black/40 backdrop-blur-md">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={props.image} alt={props.name} />
            <AvatarFallback>{props.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-zinc-200">
              <CalendarDays className="inline-block w-4 h-4 mr-1" />
              {new Date(props.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-sm text-zinc-200">
              <MapPin className="inline-block w-4 h-4 mr-1" />
              {props.location}
            </p>
          </div>
        </div>
        <Badge variant="outline" className="text-zinc-200">
          <Users className="w-4 h-4 mr-1" />
          {props.expectedGuests} convidados esperados
        </Badge>
      </CardContent>
      <CardFooter className="bg-black/5 backdrop-blur-md p-6">
        <p className="text-xs text-zinc-200">{props.description}</p>
      </CardFooter>
    </Card>
  );
}
