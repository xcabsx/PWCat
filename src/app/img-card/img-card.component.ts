import { Component, OnInit } from '@angular/core';

class CatImageComponent {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html'
})



export class ImgCardComponent implements OnInit {

  private image: CatImageComponent = {
    message: 'CATSSSSS',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  constructor() { }

  ngOnInit() {
     this.src = this.image.api + this.image.message;
     this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }

}
