const express = require( 'express' );
const app = express();
const path = require( 'path' );
const morgan = require( 'morgan' );

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(morgan( 'dev' ));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

module.exports = app;
