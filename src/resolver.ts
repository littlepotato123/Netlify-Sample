import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class Resolve {
    @Query(() => String)
    hello() {
        return "Hi";
    }

    @Mutation(() => String)
    create() {
        return "Mutation Completed"
    }
};