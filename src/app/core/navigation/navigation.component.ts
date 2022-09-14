import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
  }

toggleMenu(toggler: any) {
  console.log()
  const menuBtn = toggler.srcElement;
  const menu = toggler.srcElement.parentElement.nextSibling;
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

}

}
