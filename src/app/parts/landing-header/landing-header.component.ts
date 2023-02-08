import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})

export class LandingHeaderComponent implements OnInit {
  constructor() {}

  @ViewChild('navComponent') navElement : ElementRef;

  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.navElement.nativeElement.classList.remove("transparent");
    } else {
      this.navElement.nativeElement.classList.add("transparent");
    }
  }

  ngOnInit(): void {
  }
}
