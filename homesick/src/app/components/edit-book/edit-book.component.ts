import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Router } from '@angular/router';

declare var M:any

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book = {
    _id: '',
    title: '',
    author: '',
    genre: '',
    year: 0 
  }

  constructor(private server: ServerConnectionService,
    private router:Router) { }

  ngOnInit(): void {
    this.book = this.server.book
  }

  Edit(){
    this.server.EditBook(this.book)
    .subscribe(
      res => {
        this.router.navigate(['/Home']),
        M.toast({html: 'A Book has been updated'})
      },
      err => console.log(err)
    )
  } 

}
