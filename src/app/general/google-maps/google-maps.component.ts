import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  lat = 19.333315887998666;
  lng = -99.24968564239495;

  constructor() { }

  ngOnInit(): void {
  }

}
