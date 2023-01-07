import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesHandleService {
  imagesSliderHomePage:Array<any>=[
    {src:"../../assets/homeslider/1.png",classes:"carousel-item active"},
    {src:"../../assets/homeslider/2.png",classes:"carousel-item"},
    {src:"../../assets/homeslider/3.png",classes:"carousel-item"},
    {src:"../../assets/homeslider/4.png",classes:"carousel-item"},
    {src:"../../assets/homeslider/5.png",classes:"carousel-item"},
    {src:"../../assets/homeslider/6.png",classes:"carousel-item"},
    {src:"../../assets/homeslider/7.png",classes:"carousel-item"},
  ]

  constructor() { }



getSliderImages(){
  return this.imagesSliderHomePage
}

}
