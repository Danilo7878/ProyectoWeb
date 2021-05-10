import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie = {
    title: '',
    director: '',
    company: '',
    genre: '',
    realese: 0 
  }

  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  Create() {
    this.server.CreateMovie(this.movie)
    .subscribe(
      res => {
        this.router.navigate(['/Movies']),
        M.toast({html: 'A New Movie has been created'})
      },
      err => console.log(err)
    )
  }

}
