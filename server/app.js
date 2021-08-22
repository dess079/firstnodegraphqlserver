var express = require('express');
var { graphqlHTTP } = require('express-graphql'); // CommonJS


const app = express();
const port = 4000;

// Use graphiql 
app.use('/graphql', graphqlHTTP(
    { 
      graphiql:true 
    }
)); 
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})