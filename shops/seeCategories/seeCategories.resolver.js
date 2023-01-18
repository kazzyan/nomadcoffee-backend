import prisma from "../../prisma";

export default {
    Query: {
        seeCategories: (_, { page }) => prisma.category.findMany({
            skip: (page - 1) * 3,
            take: 3
        })
    }
}


