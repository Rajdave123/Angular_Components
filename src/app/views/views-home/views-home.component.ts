import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { values: 22, label: '# of Users' },
    { values: 902, label: 'Revenue' },
    { values: 50, label: 'Reviews' },
  ];

  itemList = [
    {image: '/assets/couch.jpeg',tite:'Couch',description:'This is a fantastic couch to sit.'},
    {image: '/assets/dresser.jpeg',title:'Dresser',description: 'This is a great dresser to put stuff in.'},
  ]

  constructor() {}

  ngOnInit(): void {}
}
