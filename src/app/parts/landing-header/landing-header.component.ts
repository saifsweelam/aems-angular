import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})

export class LandingHeaderComponent implements OnInit {
  constructor() {}

  @ViewChild('navComponent') navElementRef : any;

  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.navElementRef.nativeElement.classList.remove("transparent");
    } else {
      this.navElementRef.nativeElement.classList.add("transparent");
    }
  }

  ngOnInit(): void {
  }
  
  // ngAfterViewInit() {
  //   console.log(this.navElementRef);
  //   console.log(this.navElementRef.nativeElement);
  //   window.onscroll = this.scrollFunction;
  // }
}
