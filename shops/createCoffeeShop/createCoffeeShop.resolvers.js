import prisma from "../../prisma";
import { protectedResolver } from "../../users/users.util";
import { parsingCategories } from "../coffeeShops.util";

export default {
    Mutation: {
        createCoffeeShop: protectedResolver(async (_, { name, word, url }, { thisUser }) => {

            const existShop = await prisma.coffeeShop.findUnique({
                where: {
                    name
                }
            });

            if (existShop) {
                return {
                    ok: false,
                    error: "CoffeShop name exists already"
                }
            }

            let photosObj = [];

            let categoriesObj = [];

            if (word) {
                categoriesObj = parsingCategories(word);
            }

            const createShop = await prisma.coffeeShop.create({
                data: {
                    name,
                    user: {
                        connect: {
                            id: thisUser.id
                        }
                    },
                    photos: {
                        create: {
                            url
                        }
                    },
                    ...(categoriesObj.length > 0 && {
                        categories: {
                            connectOrCreate: categoriesObj
                        }
                    }),
                }
            });

            return {
                ok: true,
                error: "CoffeeShop created."
            }
        })
    }
}


