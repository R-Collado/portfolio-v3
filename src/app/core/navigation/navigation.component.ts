import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  path!: string;
  
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
  
  ngOnInit(): void {
    this.path = window.location.pathname;
  }
  
  toggleMenu(toggler: any) {
    let menuBtn;
    let menu;
    let overlay;

    if(toggler.srcElement.classList.contains('nav-menu-icon')) {
      menuBtn = toggler.srcElement;
      menu = toggler.srcElement.parentElement.nextSibling;
      overlay = toggler.srcElement.parentElement.nextSibling.nextSibling;
    } else {
      menuBtn = toggler.srcElement.firstElementChild;
      menu = toggler.srcElement.nextSibling;
      overlay = toggler.srcElement.nextSibling.nextSibling;
    }
    
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  closeMenu(overlay: any) {
    const overlayElmnt = overlay.srcElement;
    const menuBtn = overlayElmnt.previousSibling.previousSibling.firstElementChild;
    const menu = overlayElmnt.previousSibling;

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlayElmnt.classList.toggle('active');
  }

  linkClicked(): void {
    setTimeout(() => {
      this.path = window.location.pathname;
    }, 1)
  }

}
