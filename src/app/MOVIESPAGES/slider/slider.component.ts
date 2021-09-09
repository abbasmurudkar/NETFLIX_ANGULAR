import { Movies } from './../../MODELS/movies';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesServices } from 'src/app/SERVICES/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images:string="";
@Input() sliderconfig;
@Input() movies:Movies;
@Input() title:string ;
customOptions: any = {
  loop:false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag:false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 7
    }
  },
  nav:false
}

}

