import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET } from '../constants/constants';
import { TokenI } from '../model/token.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  token: TokenI

  constructor(private http: HttpClient) {
    console.log('Spotify service is ready!')
  }

  getToken(): Observable<TokenI> {
    let url = 'https://spotify-get-token.herokuapp.com/spotify/' + CLIENT_ID + '/' + CLIENT_SECRET
    return this.http.get<TokenI>(url)
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token.access_token}`
    })
    return this.http.get(url, { headers })

  }

  getNewRelases() {
    return this.getQuery('browse/new-releases?limit=6').pipe(map(data => { return data['albums'].items }))
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => {
        return data['tracks']
      })
    )
  }

}

