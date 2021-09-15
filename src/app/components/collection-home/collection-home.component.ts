import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent implements OnInit {
  data = [
    { name: 'Sanjay', age: 24, job: 'Designer' },
    { name: 'Jay', age: 24, job: 'Engineer' },
    { name: 'Raj', age: 25, job: 'Computer Scientist' },
  ] as any;

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ] as any;
  constructor() {}

  ngOnInit(): void {}
}
