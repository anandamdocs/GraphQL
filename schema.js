var {
    graphql,
    buildSchema
} = require('graphql');


//SDL
var schema = buildSchema(`
  type Query {
    hello: String
    counter: Int
  }
  type Mutation {
      incrementCounter(value: Int): Int 
  }
`);

let counterValue =10;

var rootValue = {
    // queries
    hello: () => 'Hello world!',
    counter: () => counterValue,

    //mutataions
    incrementCounter: (args) =>{
        console.log(args);
        counterValue = counterValue + args.value || 1;
        return counterValue;
    }

    // incrementCounter: () => {
    //     counterValue = counterValue + 1;
    //     return counterValue;
    // }
};

// const query = process.argv[2];

// graphql(schema, query, root).then((response) => {
//     console.log(response);
// });

module.exports = {
    schema,
    rootValue
}