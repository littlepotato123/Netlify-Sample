import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { Resolve } from './resolver';

const start = async () => {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                Resolve
            ]
        })
    });

    server.listen({ port: process.env.PORT || 4000 })
        .then(({ url }) => console.log(url))
        .catch(e => console.log(e));
};

start();