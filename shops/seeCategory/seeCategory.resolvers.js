import prisma from "../../prisma";

export default {
    Query: {
        seeCategory: (_, { slug }) => prisma.category.findUnique({
            where: { slug }
        })
    }
}


