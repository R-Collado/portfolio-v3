import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  links = [
    {link: '/', label: 'home'},
    {link: '/work', label: 'work'},
    {link: '/skills', label: 'skills'},
    {link: '/shelf', label: 'shelf'},
    {link: '/resume', label: 'resume'},
  ];

  socials = [
    {link: '/', label: 'ig'},
    {link: '/', label: 'in'},
    {link: '/', label: 'gh'},
  ]
  
  toggleMenu(toggler: any) {
    let menuBtn;
    let menu;

    if(toggler.srcElement.classList.contains('nav-menu-icon')) {
      menuBtn = toggler.srcElement;
      menu = toggler.srcElement.parentElement.nextSibling;
    } else {
      menuBtn = toggler.srcElement.firstElementChild;
      menu = toggler.srcElement.nextSibling;
    }
    
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

  }

}
