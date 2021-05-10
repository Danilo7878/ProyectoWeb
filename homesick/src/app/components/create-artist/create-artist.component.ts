import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist = {
    name: '',
    genre: '',
    state: '' 
  }

  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Create() {
    this.server.CreateArtist(this.artist)
    .subscribe(
      res => {
        this.router.navigate(['/Artists']),
        M.toast({html: 'A New Artist has been created'})
      },
      err => console.log(err)
    )
  }

}
