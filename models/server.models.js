const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.requestPath = '/api/dbapp';
    this.authPath = '/api/auth';
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.requestPath, require('../routes/user.routes'));
    this.app.use(this.requestPath, require('../routes/vector.routes'));
    this.app.use(this.authPath, require('../routes/auth.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in port ', this.port);
    });
  }
}

module.exports = Server;
