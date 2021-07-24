import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  glowEffect = false;
  @ViewChild('caseBtn', { read: ElementRef } ) caseBtn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  hoverEffect(event){
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.caseBtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundry = rect.left + 2;
    const rightBoundary = rect.right - 2;


    if ( xTouch < leftBoundry || xTouch > rightBoundary || yTouch < topBoundary ) {
      this.glowEffect = false;
    }
  }

  openLinkedin(url:string){
    window.open(url, '_system', 'location=yes');
  }

  openGitHub(url:string){
    window.open(url, '_system', 'location=yes');
  }

  openBehnace(url:string){
    window.open(url, '_system', 'location=yes');
  }

}
