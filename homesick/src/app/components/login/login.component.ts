import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import {Router} from '@angular/router'

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private server: ServerConnectionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Login() {
    this.server.Login(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/Home']);
      },
      err => M.toast({html: 'Invalid User or password'})
    )
  }

}
