import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
})
export class ShelfComponent implements OnInit {
  articles = [
    {
      link: 'developing-websites-on-your-free-time',
      title: 'Developing websites on your free time',
      date: '23 september 2022',
      preview:
        'Developing on your free time can be hard. As you might feel that it isn’t worth it, you might get tired or you might lose your motivation...',
    },
    {
      title: 'Developing websites on your free time',
      date: '23 september 2022',
      preview:
        'Developing on your free time can be hard. As you might feel that it isn’t worth it, you might get tired or you might lose your motivation...',
    },
    {
      title: 'Developing websites on your free time',
      date: '23 september 2022',
      preview:
        'Developing on your free time can be hard. As you might feel that it isn’t worth it, you might get tired or you might lose your motivation...',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
