import { gql } from "apollo-server";

export default gql`
    type Query {
        seeCategory(slug: String!): Category
    }
`;
