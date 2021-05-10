import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {ServerConnectionService} from './services/server-connection.service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private server:ServerConnectionService,
    private router:Router
  ) {

  }

  canActivate(): boolean {
    if (this.server.loggedIn()){
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
  
}
