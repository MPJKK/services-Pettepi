import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

    apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

    constructor(private http: HttpClient) {
    }

    getRoutes(nimi) {
        const body = `{stops(name: "Gransinmäki") {
        name
        patterns {
          name
          route {
            shortName
            longName
          }
          directionId
        }
      }
    }`;
        const headers = {
            headers: new HttpHeaders().set('Content-type', 'application/graphql')
        };

        interface ReittiData {
            data: object;
        }

        return this.http.post<ReittiData>(this.apiUrl, body, headers);
    }

}
