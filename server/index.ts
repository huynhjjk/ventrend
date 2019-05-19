import { aRoutes } from './routes/a';
import { bRoutes } from './routes/b';
import { signInRoutes } from './routes/sign-in';
const express = require('express');
const next = require('next');
class App {
    public server: any;
    public dev: boolean = process.env.NODE_ENV !== 'production';
    public app: any = next({ dev: this.dev });
    public handle = this.app.getRequestHandler();
    public aRoutes: aRoutes = new aRoutes();
    public bRoutes: bRoutes = new bRoutes();
    public signInRoutes: signInRoutes = new signInRoutes();

    constructor() {
      this.server = express();
      this.app
      .prepare()
      .then(() => {
        this.aRoutes.routes(this.app, this.server);
        this.bRoutes.routes(this.app, this.server);
        this.signInRoutes.routes(this.app, this.server);
    
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
