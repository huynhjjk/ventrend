export class bRoutes {

    public routes(app: any, server: any): void {
        server.get('/b', (req: any, res: any) => {
            const actualPage = '/b'
            app.render(req, res, actualPage, req.query)
        });
    }

}