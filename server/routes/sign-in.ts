export class bRoutes {

    public routes(app: any, server: any): void {
        server.get('/sign-in', (req: any, res: any) => {
            const actualPage = '/sign-in'
            app.render(req, res, actualPage, req.query)
        });
    }

}