import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M:any

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie = {
    _id: '',
    title: '',
    director: '',
    company: '',
    genre: '',
    realese: 0 
  }

  constructor(private server: ServerConnectionService,
    private router:Router) { }

  ngOnInit(): void {
    this.movie = this.server.movie
  }

  Edit(){
    this.server.EditMovie(this.movie)
    .subscribe(
      res => {
        this.router.navigate(['/Movies']),
        M.toast({html: 'A Movie has been updated'})
      },
      err => console.log(err)
    )
  } 

}
