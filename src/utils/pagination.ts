export const getCurrentPageNumber = (page: string): number => {
  return page ? Number(page) : 1;
};

export const getTotalPages = (
  totalItems: number,
  itemsPerPage: number = 20,
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const getNextPageUrl = (
  currentPage: number,
  totalPages: number,
  endpoint: string = "stores",
): string | null => {
  if (currentPage < 1 || currentPage >= totalPages) {
    return null;
  }

  return `${process.env.CURRENT_URL}/api/${
    process.env.API_VERSION as string
  }/${endpoint}?page=${currentPage + 1}` as string;
};

export const getPreviousPageUrl = (
  currentPage: number,
  totalPages: number,
  endpoint: string = "stores",
): string | null => {
  if (currentPage <= 1 || currentPage > totalPages) {
    return null;
  }

  return `${process.env.CURRENT_URL}/api/${
    process.env.API_VERSION as string
  }/${endpoint}?page=${currentPage - 1}` as string;
};

export const calculatePagination = (
  queryPage: string,
  totalItems: number,
  endpoint: string = "stores",
) => {
  try {
    const currentPage = getCurrentPageNumber(queryPage);
    if (totalItems === 0) throw new Error("No items found");

    const totalPages = getTotalPages(totalItems);
    if (currentPage < 1 || currentPage > totalPages)
      throw new Error("Invalid page number");

    return {
      success: true,
      data: {
        totalItems,
        currentPage,
        totalPages,
        nextPageUrl: getNextPageUrl(currentPage, totalPages, endpoint),
        previousPageUrl: getPreviousPageUrl(currentPage, totalPages, endpoint),
      },
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return {
      success: false,
      message,
    };
  }
};
