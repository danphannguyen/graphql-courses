Source : https://www.howtographql.com/typescript-helix/0-introduction/

# Nice to know 

- makeExecutableSchema function glue GraphQL SDL (Schema Definition Language) with Resolvers into an executable schema we can later use
- SSE (Server-Sent Events) Push data to client from server over HTTP
- Trivial field like "Link" dont need a resolver
- Mutation run in series and queries run in parallel
- 

# Link

## GraphiQL
http://localhost:3000/graphql

# Query 

## Simple Query (Get)
```
query {
  feed {
    id
    url
    description
  }
}
```

## Simple Mutation (Post)
```
mutation {
  post(url: "www.prisma.io", description: "Prisma replaces traditional ORMs") {
    id #here you can add field to retrieve in response
  }
}
``` 

# Prisma 
run `npx prisma init`

Next steps:
1. Run `prisma dev` to start a local Prisma Postgres server.
2. Define models in the `schema.prisma` file.
3. Run `npx prisma migrate dev` to migrate your local Prisma Postgres database.
4. Tip: Explore how you can extend the `ORM` with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm
5. More information in our documentation: https://pris.ly/d/getting-started

Execute `npx ts-node src/script.ts` to execute the following file and see what's inside our database
