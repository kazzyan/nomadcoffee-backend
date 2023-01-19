import { gql } from "apollo-server";

export default gql`
    type CoffeeShop {
        id: Int!
        name: String!
        latitude: String
        longitude: String
        user: User!
        photos: [CoffeeShopPhoto]
        categories: [Category]
        createAt: String!
        updateAt: String!    
    }
    type CoffeeShopPhoto {
        id: Int!
        url: String!
        shop: CoffeeShop!
        createAt: String!
        updateAt: String!  
    }
    type Category {
        id: Int!
        name: String
        slug: String!
        shops(page: Int!): [CoffeeShop]
        totalShops: Int!
        createAt: String!
        updateAt: String!    
    }
`;
