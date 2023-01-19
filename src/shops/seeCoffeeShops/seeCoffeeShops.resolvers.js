import prisma from "../../prisma";

export default {
    Query: {
        seeCoffeeShops: (_, { page }) => prisma.coffeeShop.findMany({
            skip: (page - 1) * 3,
            take: 3
        })
    }
}


