import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public smallHeader: boolean = false;

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.smallHeader = this.isSmallHeader();
    window.onresize = () => {
      this.smallHeader = this.isSmallHeader();
    };
  }

  isSmallHeader(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 1000;
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  openLink(link: string): void {
    this.shared.openLink(link);
  }
}
