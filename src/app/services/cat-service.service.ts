import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat-model';

@Injectable({
  providedIn: 'root',
})
export class CatServiceService {
  private baseUrl = `https://api.thecatapi.com/v1/images/search`;
  private headers = new HttpHeaders().set(
    'x-api-key',
    'live_3UWR3r267cG9A1LPceHLM88GKUYcgcUs0FHT4yvtyjgblAmZnrGbkqtqz7F3iK6k',
  );
  constructor(private http: HttpClient) {}

  getCats(page: number, limit: number): Observable<Cat[]> {
    const apiUrl = this.baseUrl + `?limit=${limit}&page=${page}`;
    return this.http.get<any>(apiUrl, { headers: this.headers });
  }
}
