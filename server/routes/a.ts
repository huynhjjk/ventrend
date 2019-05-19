// import * as fetchImport from 'isomorphic-unfetch'
// const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default
// const credentials = {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json'
//     }
// }
export class aRoutes {

    public routes(_app: any, server: any): void {
        // const actualPage = '/a'
        // const url = 'https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=[%22Golf%22]&limit=1000&locale=en_US&access_token=https://graph.facebook.com/search?type=adinterest&q=Golf&limit=10000&locale=en_US&access_token=EAAHR94fSmuMBAJCnBfpij6XuhZBZCWY5WSis3AhippkwtLwj9bNqqI37JfCNGhYs3aaE7Hf2v43GojK6K6vMevRuVX1ceOubwqLMPcc9JkJUyJvg30NlpCamRXOh7kURTqRZCmNOpJwjRKx7cpJbgt1aK7gPttwcu02syihau7QgPshrcRCQQBsNnfS984ZD';
        server.get('/a', (_req: any, _res: any) => {
            console.log('trigger');
            // const data = fetch(url, credentials)
            // .then((response: any) => response.json())
            // .then((data: any) => data)
            // .catch((error: any) => console.log(`error ${error}`));
            // return app.render(req, res, actualPage, { data })
            // return app.render(req, res, actualPage, {});
        });
    }

}