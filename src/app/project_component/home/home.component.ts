import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxPaginationModule],
templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/bootstrap.min.css'],
})
export class HomeComponent {
  public counter = 0;
  public page: number = 1;
  public itemsPerPage: number = 5;
  public myPost = [
    {
      id: 'p001',
      title: 'Title 1',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text. ',
    },
    {
      id: 'p002',
      title: 'Title 2',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text.',
    },
    {
      id: 'p003',
      title: 'Title 3',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text.',
    },
    {
      id: 'p004',
      title: 'Title 4',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text.',
    },
    {
      id: 'p005',
      title: 'Title 5',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text.',
    },
    {
      id: 'p006',
      title: 'Title 6',
      imgSrc: 'Image Source',
      bodyText:
        'The quick brown fox jumps over the lazy dog. Some text will go here. The quick brown fox jumps over the lazy dog. Some more text.',
    },
  ];

  constructor(public router: Router) {

  }

  public test() {

    this.counter++;






  }

}
