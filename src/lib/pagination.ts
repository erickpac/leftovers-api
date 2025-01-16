import { CURRENT_URL, API_VERSION } from "./config";

const getCurrentPageNumber = (page: string): number => {
  return page ? Number(page) : 1;
};

const getTotalPages = (
  totalItems: number,
  itemsPerPage: number = 20,
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

const getNextPageUrl = (
  currentPage: number,
  totalPages: number,
  endpoint: string = "stores",
): string | null => {
  if (currentPage < 1 || currentPage >= totalPages) {
    return null;
  }

  return `${CURRENT_URL}/api/${
    API_VERSION as string
  }/${endpoint}?page=${currentPage + 1}` as string;
};

const getPreviousPageUrl = (
  currentPage: number,
  totalPages: number,
  endpoint: string = "stores",
): string | null => {
  if (currentPage <= 1 || currentPage > totalPages) {
    return null;
  }

  return `${CURRENT_URL}/api/${
    API_VERSION as string
  }/${endpoint}?page=${currentPage - 1}` as string;
};

/**
 * Calculates pagination details based on the provided query page, total items, and endpoint.
 *
 * @param queryPage - The current page number as a string from the query.
 * @param totalItems - The total number of items available.
 * @param endpoint - The API endpoint for generating pagination URLs (default is "stores").
 * @returns An object containing pagination details including total items, current page, total pages,
 *          next page URL, and previous page URL if successful. If an error occurs, returns an object
 *          with success set to false and an error message.
 *
 * @throws Will throw an error if no items are found or if the current page number is invalid.
 */
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
