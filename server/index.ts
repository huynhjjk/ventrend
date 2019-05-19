import { aRoutes } from './routes/a';
const express = require('express');
const next = require('next');
class App {
    public server: any;
    public dev: boolean = process.env.NODE_ENV !== 'production';
    public app: any = next({ dev: this.dev });
    public handle = this.app.getRequestHandler();
    public aRoutes: aRoutes = new aRoutes();
    public bRoutes: aRoutes = new aRoutes();

    constructor() {
      this.server = express();
      this.app
      .prepare()
      .then(() => {
        // this.aRoutes.routes(this.app, this.server);
        // this.bRoutes.routes(this.app, this.server);
    
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
