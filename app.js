const express = require( 'express' );
const app = express();
const path = require( 'path' );

const morgan = require( 'morgan' );

app.use(morgan( 'dev' ));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

module.exports = app;
