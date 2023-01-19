export const parsingCategories = (slug) => {

    const categories = slug.match(/#[\w]+/g) || [];

    const categoriesObj = categories.map((slug) => ({
        where: { slug },
        create: { slug }
    }));

    return categoriesObj;
}

