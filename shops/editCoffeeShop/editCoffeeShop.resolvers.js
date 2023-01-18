import prisma from "../../prisma";
import { protectedResolver } from "../../users/users.util";
import { parsingCategories } from "../coffeeShops.util";

export default {
    Mutation: {
        editCoffeeShop: protectedResolver(async (_, { id, url, word }, { thisUser }) => {

            const existShop = await prisma.coffeeShop.findFirst({
                where: {
                    id,
                    userId: thisUser.id
                },
                include: {
                    photos: {
                        select: {
                            url: true
                        }
                    },
                    categories: {
                        select: {
                            slug: true
                        }
                    }
                }
            });

            if (!existShop) {
                return {
                    ok: false,
                    error: "coffeeShop not found"
                }
            }

            const updateShop = await prisma.coffeeShop.update({
                where: { id },
                data: {
                    photos: {
                        create: { url }
                    },
                    categories: {
                        disconnect: existShop.categories,
                        connectOrCreate: parsingCategories(word)
                    }
                }
            });

            if (updateShop) {
                return {
                    ok: true,
                    error: "coffeeShop updated"
                }
            }
        })
    }
}


