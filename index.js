const { createServer } = require('@vercel/node');
const app = require('../app');

module.exports = createServer(app);
