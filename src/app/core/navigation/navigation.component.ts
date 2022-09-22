import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  path!: string;

  links = [
    { link: '/', label: 'Home' },
    { link: '/work', label: 'Work' },
    { link: '/skills', label: 'Skills' },
    { link: '/shelf', label: 'Shelf' },
    { link: '/resume', label: 'Resume' },
  ];

  socials = ['IG', 'IN', 'GH', 'TL'];

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.path = window.location.pathname;
  }

  toggleMenu(toggler: any) {
    let menuBtn;
    let menu;
    let overlay;

    if (toggler.srcElement.classList.contains('nav-menu-icon')) {
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
    const menuBtn =
      overlayElmnt.previousSibling.previousSibling.firstElementChild;
    const menu = overlayElmnt.previousSibling;

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlayElmnt.classList.toggle('active');
  }

  linkClicked(link: any): void {
    const menu =
      link.srcElement.parentElement.parentElement.parentElement.parentElement;
    const menuBtn = menu.previousSibling.firstElementChild;
    const overlay = menu.nextSibling;

    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active');

    setTimeout(() => {
      this.path = window.location.pathname;
    }, 1);
  }

  openLink(link: string): void {
    this.shared.openLink(link.toLowerCase());
  }
}
