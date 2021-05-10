import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M:any

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists = [];
  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.server.getArtists()
    .subscribe(
      res => {
        this.artists = res.artists;
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  deleteArtist(_id: string): void {
    this.server.DeleteArtist(_id)
    .subscribe(res => {
      console.log(res)
    }      
    )

    this.server.getArtists()
    .subscribe(
      res => {
        this.artists = res.artists;
        M.toast({html: 'Deleted Successfuly'})
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  editArtist(artist){
    this.server.artist = artist,
    this.router.navigate(['/EditArtist']);
  }

}
