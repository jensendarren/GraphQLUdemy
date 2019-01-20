const graphql = require('graphql');
const axios = require('axios');

const _ = require('lodash');

const users = [
    { id: '2', firstName: 'Dadou', age: 45},
    { id: '47', firstName: 'Sophia', age: 6}
]

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLString } },
        resolve(parentValue, args) {
            // return _.find(users, { id: args.id });
            return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(resp => resp.data);
          }
        }
      }
    }
);

module.exports = new GraphQLSchema({
    query: RootQuery
});
