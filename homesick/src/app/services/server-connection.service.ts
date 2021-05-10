import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  private URL = 'http://localhost:3000'

  book = {
    _id: '',
    title: '',
    author: '',
    genre: '',
    year: 0 
  }

  movie = {
    _id: '',
    title: '',
    director: '',
    company: '',
    genre: '',
    realese: 0 
  }

  artist = {
    _id: '',
    name: '',
    genre: '',
    state: '' 
  }

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signUp(user) {
    return this.http.post<any>(this.URL+ "/SignUp", user);
  }
  
  Login(user) {
    return this.http.post<any>(this.URL + "/Login", user)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/Login'])
  }

  //Data routes Handler
  getBooks() {
    return this.http.get<any>(this.URL + '/Books');
  }

  CreateBook(book) {
    return this.http.post<any>(this.URL+ "/Create/Book", book);
  }
  
  DeleteBook(_id: string) {
    return this.http.delete<any>(this.URL +"/Delete/Book" + `/${_id}`);
  }

  EditBook(book) {
    return this.http.put<any>(this.URL +"/Update/Book",book);
  }

  getMovies() {
    return this.http.get<any>(this.URL + '/Movies');
  }

  CreateMovie(movie) {
    return this.http.post<any>(this.URL+ "/Create/Movie", movie);
  }

  DeleteMovie(_id: string) {
    return this.http.delete<any>(this.URL +"/Delete/Movie" + `/${_id}`);
  }

  EditMovie(movie) {
    return this.http.put<any>(this.URL +"/Update/Movie",movie);
  }

  getArtists() {
    return this.http.get<any>(this.URL + '/Artists');
  }

  CreateArtist(artist) {
    return this.http.post<any>(this.URL+ "/Create/Artist", artist);
  }

  DeleteArtist(_id: string) {
    return this.http.delete<any>(this.URL +"/Delete/Artist" + `/${_id}`);
  }

  EditArtist(artist) {
    return this.http.put<any>(this.URL +"/Update/Artist",artist);
  }

}
