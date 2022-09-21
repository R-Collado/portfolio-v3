import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
  }

  openLink(link: string): void {
    this.shared.openLink(link);
  }
}
