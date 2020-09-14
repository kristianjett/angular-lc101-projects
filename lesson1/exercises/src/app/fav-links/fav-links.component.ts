import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linkTitle = 'Favorite Links'
  
  favLinks = [
    'https://www.instagram.com/kristian_jett/',
    'https://www.google.com/'
  ]

  constructor() { }

  ngOnInit() {
  }

}
