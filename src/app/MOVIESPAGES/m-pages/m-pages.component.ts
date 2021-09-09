import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from '../../MODELS/movies';
import { MoviesServices } from '../../SERVICES/movies.service';
import {  ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
@Component({
  selector: 'app-m-pages',
  templateUrl: './m-pages.component.html',
  styleUrls: ['./m-pages.component.scss']
})
export class MPAGESComponent implements OnInit,OnDestroy {

sticky:boolean=false; 
headerBGurl:string;
subs: Subscription[] = [];
trending:Movies;
popular:Movies;
topRated:Movies;
original:Movies;
nowplaying:Movies;


@ViewChild('stickHeader') header: ElementRef
constructor(private movie:MoviesServices) { }

ngOnInit(): void {
  this.subs.push(this.movie.getTrending().subscribe(data => {
    this.trending=data;
this.headerBGurl= "https://image.tmdb.org/t/p/original"+this.trending.results[7].backdrop_path;
  }));
  this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular=data));
  this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated=data));
  this.subs.push(this.movie.getOriginals().subscribe(data => this.original=data));
  this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowplaying=data));
}
ngOnDestroy():void{
this.subs.map(s => s.unsubscribe());
}
@HostListener('window:scroll', ['$event'])
handleScroll() {
  const windowScroll = window.pageYOffset;
  if (windowScroll >= this.header.nativeElement.offsetHeight) {
    this.sticky = true;
  } else {
    this.sticky = false;
  }
}
}
