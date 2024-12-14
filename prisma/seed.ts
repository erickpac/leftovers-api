import prisma from "../src/database/client";

const predefinedHighlights = [
  { text: "Friendly staff", icon: "😊" },
  { text: "Great value", icon: "💰" },
  { text: "Quick pickup", icon: "⏱️" },
];

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@example.com",
        password: "hashed_password_1",
        role: "CUSTOMER",
      },
      {
        name: "Bob",
        email: "bob@example.com",
        password: "hashed_password_2",
        role: "STORE_OWNER",
      },
    ],
  });

  // Seed Stores
  const store = await prisma.store.create({
    data: {
      name: "Bob's Bakery",
      description: "Freshly baked goods every day!",
      address: "123 Bakery St.",
      latitude: 40.7128,
      longitude: -74.006,
      contactEmail: "contact@bobsbakery.com",
      contactPhone: "123-456-7890",
      logo: "https://static.vecteezy.com/system/resources/previews/005/293/951/non_2x/croissant-logo-template-suitable-for-restaurant-and-bakery-free-vector.jpg",
      owner: { connect: { email: "bob@example.com" } },
    },
  });

  // Seed Categories
  await prisma.category.createMany({
    data: [{ name: "Bakery" }, { name: "Groceries" }, { name: "Dairy" }],
  });

  // Seed Store Categories
  await prisma.storeCategory.create({
    data: {
      storeId: store.id,
      categoryId: 1, // Assume this maps to the 'Bakery' category
    },
  });

  // Seed Food Items
  const foodItem = await prisma.foodItem.create({
    data: {
      name: "Chocolate Croissant",
      description: "Delicious croissant filled with chocolate.",
      image: "https://asset-prod.france.fr/bread_1284438_1920_1_ff0157080c.jpg",
      price: 2.5,
      originalPrice: 3.0,
      quantity: 20,
      pickupStart: new Date("2024-11-26T08:00:00Z"),
      pickupEnd: new Date("2024-11-26T12:00:00Z"),
      storeId: store.id,
    },
  });

  // Seed Orders
  await prisma.order.create({
    data: {
      userId: 1, // Assume this maps to Alice
      foodItemId: foodItem.id,
      quantity: 2,
      totalPrice: 5.0,
      status: "COMPLETED",
    },
  });

  // Seed Notifications
  await prisma.notification.createMany({
    data: [
      { userId: 1, message: "Your order is ready for pickup!" },
      { userId: 2, message: "A new food item has been added to your store!" },
    ],
  });

  // Seed Favorites
  await prisma.favorite.create({
    data: {
      userId: 1,
      storeId: store.id,
    },
  });

  // Seed Reviews
  await prisma.review.create({
    data: {
      userId: 1,
      storeId: store.id,
      rating: 5,
      comment: "Amazing croissants, will buy again!",
    },
  });

  // Seed Highlights
  await prisma.highlight.createMany({
    data: predefinedHighlights.map((highlight) => ({
      ...highlight,
      storeId: store.id,
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
