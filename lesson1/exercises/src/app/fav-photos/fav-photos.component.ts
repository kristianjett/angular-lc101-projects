import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos of the Year';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.tripsavvy.com/thmb/KDajrNbOAHqOeEabDNBxoxb0S9c=/3498x3498/smart/filters:no_upscale()/facts-about-bhutan-588ac1ab5f9b5874ee96077f.jpg';
  image3 = 'https://images.unsplash.com/photo-1598895939666-93369119c586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80';

  constructor() { }

  ngOnInit() {
  }

}