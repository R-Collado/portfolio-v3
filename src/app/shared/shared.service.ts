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
      }
  }
}
