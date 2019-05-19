export class aRoutes {

    public routes(app: any, server: any): void {
        server.get('/a', (req: any, res: any) => {
            const actualPage = '/a'
            app.render(req, res, actualPage, req.query)
        });
    }

}