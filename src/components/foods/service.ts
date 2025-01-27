import prisma from "@/database/client";
import { CustomError } from "@/common/custom/error";

export const getFoodById = async (id: number) => {
  return getFoodDetails(id);
};

const getFoodDetails = async (id: number) => {
  const foodItem = await prisma.foodItem.findUnique({
    where: { id },
    include: {
      store: {
        include: {
          reviews: {
            select: {
              rating: true,
            },
          },
          categories: {
            include: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
          highlights: {
            orderBy: {
              votes: "desc",
            },
            take: 3,
          },
        },
      },
    },
  });

  if (!foodItem) {
    throw new CustomError("Food item not found", 404);
  }

  const averageRating = getAverageRating(foodItem.store.reviews);

  return {
    ...foodItem,
    store: {
      ...foodItem.store,
      reviews: {
        total: foodItem.store.reviews.length,
        averageRating,
      },
    },
  };
};

const getAverageRating = (reviews: { rating: number }[]) => {
  return reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;
};
