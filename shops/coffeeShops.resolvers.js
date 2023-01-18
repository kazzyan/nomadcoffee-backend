import prisma from "../prisma";

export default {
    CoffeeShop: {
        user: ({ userId }) => prisma.user.findUnique({
            where: {
                id: userId
            }
        }),
        photos: ({ id }) => prisma.coffeeShopPhoto.findMany({
            where: {
                shop: {
                    id
                }
            }
        }),
        categories: ({ id }) => prisma.category.findMany({
            where: {
                shops: {
                    some: {
                        id
                    }
                }
            }
        })
    },
    Category: {
        shops: ({ id }, { page }) => prisma.coffeeShop.findMany({
            where: {
                categories: {
                    some: {
                        id
                    }
                }
            },
            skip: (page - 1) * 3,
            take: 3
        }),
        totalShops: ({ id }) => prisma.coffeeShop.count({
            where: {
                categories: {
                    some: {
                        id
                    }
                }
            }
        })
    }
}


