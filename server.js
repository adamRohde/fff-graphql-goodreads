const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();

const schema = require("./schema");

app.use(
    "/grapql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

//app.use();

app.listen(3000);
console.log("Listening. . . ");
