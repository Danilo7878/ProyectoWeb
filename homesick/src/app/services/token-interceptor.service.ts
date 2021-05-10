import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {ServerConnectionService} from '../services/server-connection.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private server : ServerConnectionService
  ) { }

  intercept(req, next) {
   const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.server.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

  
}
