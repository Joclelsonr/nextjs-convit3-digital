import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

type CustomPaginationProps = {
  totalPages: number;
  currentPage: number;
};

export function CustomPagination({
  totalPages,
  currentPage,
}: CustomPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${currentPage - 1}`}
              className="text-zinc-200"
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              isActive={index + 1 === currentPage}
              className="text-zinc-200"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`?page=${currentPage + 1}`}
              className="text-zinc-200"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
