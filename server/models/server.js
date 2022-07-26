const express = require('express');
const cors = require('cors');

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      copywrite: '/iecho'
    }
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());
  }

  routes(){
    this.app.use(this.paths.copywrite, require('../routes/copywrite'))
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto: ', this.port);
    })
  }

}

module.exports = Server;