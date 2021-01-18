import { Query, Resolver } from "type-graphql";

@Resolver()
export class Resolve {
    @Query(() => String)
    hello() {
        return "Hi";
    }
};