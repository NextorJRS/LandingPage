import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(id: any): void {
  let el = document.getElementById(id);
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
