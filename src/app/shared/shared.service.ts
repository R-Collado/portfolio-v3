import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  openLink(link: string): void {
    switch(link) {
      case 'ig':
        window.open('https://www.instagram.com/_rcollado/','_blank');
        break;
      case 'in':
        window.open('https://www.linkedin.com/in/roger-collado-965080151/','_blank');
        break;
      case 'gh': 
        window.open('https://github.com/R-Collado', '_blank');
        break;
      case 'team': 
        window.open('https://rcollado-team.netlify.app/', '_blank');
        break;
      case 'arise': 
        window.open('https://rcollado-arise.netlify.app/', '_blank');
        break;
      case 'heyarts': 
        window.open('https://rcollado-heyarts.netlify.app/', '_blank');
        break;
      case 'mense': 
        window.open('https://rcollado-mense.netlify.app/', '_blank');
        break;
      case 'alcobe': 
        window.open('https://rcollado-alcobe.netlify.app/', '_blank');
        break;
      }
  }
}
