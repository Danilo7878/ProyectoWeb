import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book = {
    title: '',
    author: '',
    genre: '',
    year: 0 
  }

  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Create() {
    this.server.CreateBook(this.book)
    .subscribe(
      res => {
        this.router.navigate(['/Home']),
        M.toast({html: 'A New Book has been created'})
      },
      err => console.log(err)
    )
  }

}
