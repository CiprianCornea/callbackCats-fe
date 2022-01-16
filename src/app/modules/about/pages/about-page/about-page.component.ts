import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  imageSrc = "src/app/shared/images/about.jpg";
  imageAlt="iphone"
  public logged: any;

  constructor() { }

  ngOnInit(): void {
    this.logged = localStorage.getItem('logged');
  }

}
