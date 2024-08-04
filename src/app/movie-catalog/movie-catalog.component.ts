import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  getImageUrl(path: string): string {
    return this.movieService.getImageUrl(path);
  }

  filterMovies(): any[] {
    if (!this.searchTerm) {
      return this.movies;
    }
    return this.movies.filter(movie => movie.title?.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
