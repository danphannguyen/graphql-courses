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
