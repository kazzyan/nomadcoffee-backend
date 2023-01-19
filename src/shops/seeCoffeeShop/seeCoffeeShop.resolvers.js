import prisma from "../../prisma";

export default {
    Query: {
        seeCoffeeShop: (_, { id }) => prisma.coffeeShop.findUnique({
            where: {
                id
            },

        })
    }
}


