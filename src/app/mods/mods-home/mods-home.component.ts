import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {title:'title1',content:"c1"},
    {title:'title2',content:"c2"},
    {title:'title3',content:"c3"},
    {title:'title4',content:"c4"}
  ]as any;
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}
