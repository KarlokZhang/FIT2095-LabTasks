import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  moviesDB: any[] = [];
  section = 1;
  title: string = '';
  year: number = 0;
  movieId: string = '';
  fromYear: number = 0;
  toYear: number = 0;
  actorsDB: any[] = [];
  fullName: string = '';
  bYear: number = 0;
  actorId: string = '';
  actors: any[] = [];
  movies: any[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.onGetMovies();
  }

  changeSection(sectionId: number) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    this.title = '';
    this.year = 0;
    this.movieId = '';
  }

  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  //Create a new Movie, POST request
  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe((result) => {
      this.onGetMovies();
      this.resetValues();
    });
  }

  // Select an Movie
  onSelectMovie(item: any) {
    this.title = item.title;
    this.year = item.year;
    this.movieId = item._id;
    this.actors = item.actors;

    if (this.section === 7) {
      this.dbService.getActors().subscribe((data: any) => {
        this.actorsDB = data;
        // Filter actors already in this Movie
        this.actorsDB = this.actorsDB.filter((actor) => {
          for (let idx in this.actors) {
            if (actor._id === this.actors[idx]._id) {
              return false;
            }
          }
          return true;
        });
      });
    }
  }

  onUpdateMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.updateMovie(this.movieId, obj).subscribe((result) => {
      this.onGetMovies();
      this.resetValues();
    });
  }

  // Delete Movie
  onDeleteMovie(item: any) {
    this.dbService.deleteMovie(item._id).subscribe((result) => {
      this.onGetMovies();
    });
  }

  // Delete Movie By Title
  onDeleteMovieByTitle() {
    this.dbService.deleteMovieByTitle(this.title).subscribe((result) => {
      this.onGetMovies();
      this.resetValues();
    });
  }

  // Delete Movie Between Years
  onDeleteMovieBetweenYears() {
    this.dbService
      .deleteMoviesBetweenYears(this.fromYear, this.toYear)
      .subscribe((result) => {
        this.onGetMovies();
      });
  }

  // Select a Actor
  onSelectActor(item: any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
    this.movies = item.movies;

    if (this.section === 7) {
      this.dbService.getMovies().subscribe((data: any) => {
        this.moviesDB = data;
        // Filter movies already in this Actor
        this.moviesDB = this.moviesDB.filter((movie) => {
          for (let idx in this.movies) {
            if (movie._id === this.movies[idx]._id) {
              return false;
            }
          }
          return true;
        });
      });
    }
  }

  // Add Actor To Movie
  onAddActorToMovie() {
    this.dbService
      .addActorToMovie(this.actorId, this.movieId)
      .subscribe((result) => {
        this.onGetMovies();
      });
  }
}
