import { Component, OnInit } from '@angular/core';
import {ServerConnectionService} from '../../services/server-connection.service'
import { Router } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = [];
  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.server.getBooks()
    .subscribe(
      res => {
        this.books = res.books;
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  deleteBook(_id: string): void {
    this.server.DeleteBook(_id)
    .subscribe(res => {
      console.log(res)
    }      
    )

    this.server.getBooks()
    .subscribe(
      res => {
        this.books = res.books;
        M.toast({html: 'Deleted Successfuly'})
      },
      err => {
        this.router.navigate(['/Login']); //colocar el toast de que el token expiró
      }
    )
  }

  editBook(book){
    this.server.book = book,
    this.router.navigate(['/EditBook']);
  }

}
