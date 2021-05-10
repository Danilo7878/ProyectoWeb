import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import {SignUpComponent} from './components/sign-up/sign-up.component'
import {LoginComponent} from './components/login/login.component'
import {HomeComponent} from './components/home/home.component'

import {AuthGuard} from './auth.guard'
import { ArtistsComponent } from './components/artists/artists.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { EditArtistComponent } from './components/edit-artist/edit-artist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CreateBook',
    component: CreateBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EditBook',
    component: EditBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Movies',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CreateMovie',
    component: CreateMovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EditMovie',
    component: EditMovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Artists',
    component: ArtistsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CreateArtist',
    component: CreateArtistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EditArtist',
    component: EditArtistComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
