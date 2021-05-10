import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [];
  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.server.getMovies()
    .subscribe(
      res => {
        this.movies = res.movies;
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  deleteMovie(_id: string): void {
    this.server.DeleteMovie(_id)
    .subscribe(res => {
      console.log(res)
    }      
    )

    this.server.getMovies()
    .subscribe(
      res => {
        this.movies = res.movies;
        M.toast({html: 'Deleted Successfuly'})
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  editMovie(movie){
    this.server.movie = movie,
    this.router.navigate(['/EditMovie']);
  }

}
