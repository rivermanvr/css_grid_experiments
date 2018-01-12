const http = require( 'http' );
const app = require( './app' );
const server = http.createServer(app);
const chalk = require( 'chalk' );

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(chalk.yellow(`listening on port ${port}`));
});
