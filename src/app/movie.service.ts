// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=47de2b9e8b2462b53975d18185ac40bf&language=en-US';
  private imageUrl = 'https://image.tmdb.org/t/p/original/';

  constructor(private http: HttpClient) { }

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getImageUrl(path: string): string {
    return `${this.imageUrl}${path}`;
  }
}
