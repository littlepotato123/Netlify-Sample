const express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Resolvers } from './resolver';

const init = async () => {
    const app = express();

    const server = new ApolloServer({
        playground: true,
        schema: await buildSchema({
            resolvers: [
                Resolvers
            ]
        })
    });

    server.applyMiddleware({ app })

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}/${server.graphqlPath}`);
    })
};

init();