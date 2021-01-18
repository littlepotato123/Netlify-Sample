import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { Resolve } from './resolver';

const start = async () => {
    const server = new ApolloServer({
        playground: true,
        schema: await buildSchema({
            resolvers: [
                Resolve
            ]
        })
    });

    server.listen({ port: process.env.PORT || 4000 })
        .then(() => console.log('Sever Started'))
        .catch(e => console.log(e));
};

start();