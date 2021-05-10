import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {

  artist = {
    _id: '',
    name: '',
    genre: '',
    state: '' 
  }

  constructor(private server: ServerConnectionService,
    private router:Router) { }

  ngOnInit(): void {
    this.artist = this.server.artist
  }

  Edit(){
    this.server.EditArtist(this.artist)
    .subscribe(
      res => {
        this.router.navigate(['/Artists']),
        M.toast({html: 'An Artist has been updated'})
      },
      err => console.log(err)
    )
  } 

}
