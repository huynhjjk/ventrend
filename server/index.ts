import { faceBookRoutes } from './routes/fbRoutes';
const express = require('express');
const next = require('next');
const nextRoutes = require('./../next-routes.module');

class App {
    public server: any;
    public dev: boolean = process.env.NODE_ENV !== 'production';
    public app: any = next({ dev: this.dev });
    public handle = nextRoutes.getRequestHandler(this.app)

    public faceBookRoutes: faceBookRoutes = new faceBookRoutes();

    constructor() {
      this.server = express();
      this.faceBookRoutes.routes(this.server);

      this.app
      .prepare()
      .then(() => {
        this.server.get('*', (req: any, res: any) => {
          return this.handle(req, res)
        })
    
        this.server.listen(3000, (error: any) => {
          if (error) throw error
          console.log('> Ready on http://localhost:3000')
        })
      })
      .catch((error: any) => {
        console.error(error.stack)
        process.exit(1)
      })
    }
}

export default new App().app;
