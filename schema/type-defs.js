const {gql} = require('apollo-server');


const typeDefs = gql`
    type User {
        id:ID!
        name: String!
        userNmae: String!
        age:Int!
        nationality:Nationality
        like:Boolean
        friends:[User]
        feavorateMovies:[Movies]
    }
    enum Nationality{
        Canada
        USA
        Bangladash
    }
    type Movies {
    id:ID!
    title:String!
    publicationYear:Int!
    isInTheaters:Boolean!
    }
    type Query {
        users:[User!]!
        oneUser (id:ID!): User
        movies:[Movies!]!
    }
    input CreateUser {
        name: String!
        userNmae: String!
        age:Int!
        nationality:Nationality = Bangladash

    }
    input UpdateUser {
        id: ID!
        name: String!
        userNmae: String!
        age:Int!
        nationality:Nationality = Bangladash

    }
    input RemoveUser {
        id: ID!

    }
    type Mutation {
        createUser(input:CreateUser!): [User!]!
        updateUser(input:UpdateUser!): [User!]!
        removeUser(input:RemoveUser!): [User!]!
    }
`

module.exports = {typeDefs}