const express = require('express');
const graphglHTTP = require('express-graphql');

const app = express();
const port = 4000;

// Use graphiql 
app.use('/graphql', graphglHTTP(
    { schema:schema,
      graphiql:true
    }
)); 
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})