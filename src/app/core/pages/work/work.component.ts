import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  cards = [
    {
      'img': '/assets/img/arise-header.png',
      'name': 'arise',
      'link': 'rcollado-arise.netlify.app'
    },
    {
      'img': '/assets/img/team-header.png',
      'name': 'team',
      'link': 'rcollado-team.netlify.app'
    },
    {
      'img': '/assets/img/mense-header.png',
      'name': 'mense',
      'link': 'rcollado-mense.netlify.app'
    },
    {
      'img': '/assets/img/heyarts-header.png',
      'name': 'heyarts',
      'link': 'rcollado-heyarts.netlify.app'
    },
    {
      'img': '/assets/img/alcobe-header.png',
      'name': 'alcobe',
      'link': 'rcollado-alcobe.netlify.app'
    },    
  ]

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
  }

  openLink(link: string): void {
    this.shared.openLink(link);
  }

}
