"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const resolver_1 = require("./resolver");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    const server = new apollo_server_express_1.ApolloServer({
        playground: true,
        schema: yield type_graphql_1.buildSchema({
            resolvers: [
                resolver_1.Resolvers
            ]
        })
    });
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}/${server.graphqlPath}`);
    });
});
init();
//# sourceMappingURL=index.js.map