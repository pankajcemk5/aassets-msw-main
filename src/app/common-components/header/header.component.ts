import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl:'./header.component.css'  
})
export class HeaderComponent implements OnInit {
    //This fuction will be called when hamburger munu is clicked
  myFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  constructor() { 
    
  }

  ngOnInit() {
  }

}
