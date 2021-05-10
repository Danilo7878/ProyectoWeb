import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import {Router} from '@angular/router'

declare var M:any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '' 
  }

  constructor(
    private server: ServerConnectionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.server.signUp(this.user)
    .subscribe(
      res => {
        this.router.navigate(['/Login']),
        M.toast({html: 'You have been successfully registered, Please Login'})
      },
      err => console.log(err)
    )
  }

}
