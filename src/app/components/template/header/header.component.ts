import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favorite!: boolean;


  constructor() { }

  ngOnInit(): void {
    this.favorite = true;
  }

  alterFavorite() {
    if(this.favorite == true) {
      this.favorite = false;
    } else {
      this.favorite = true;
    }
  }


}
