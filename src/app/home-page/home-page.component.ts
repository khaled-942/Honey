import { Component, OnInit } from '@angular/core';
import { ImagesHandleService } from '../services/images-handle.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images!:Array<any>;
  constructor(private sliderImages:ImagesHandleService) { }

  ngOnInit(): void {
    this.images = this.sliderImages.getSliderImages()
    console.log(this.sliderImages.getSliderImages());
    console.log(this.images);
  }

}
