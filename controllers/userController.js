const userModel = require('../models/userModel')

const resolvers = {
    Query: {
        getAllUsers: () => userModel.getAllUsers(),
        getUserById: (_, { id }) => userModel.getUserById(id),
    },
    Mutation: {
        createUser: (_, {name, email, age}) => userModel.create(name, email, age),
    }
}

module.exports = resolvers;