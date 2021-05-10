import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ServerConnectionService} from './services/server-connection.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import {AuthGuard} from './auth.guard'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MoviesComponent } from './components/movies/movies.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { EditArtistComponent } from './components/edit-artist/edit-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    ArtistsComponent,
    NavbarComponent,
    CreateBookComponent,
    CreateMovieComponent,
    CreateArtistComponent,
    EditBookComponent,
    EditMovieComponent,
    EditArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
