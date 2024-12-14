export interface InfoPagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
}
