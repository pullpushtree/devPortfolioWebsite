import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  dropdown = false;
  @ViewChild('workBtn', { read: ElementRef } ) workBtn: ElementRef

  constructor() { }

  ngOnInit() {}

  hideDropdown(event ){
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.workBtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundry = rect.left + 2;
    const rightBoundary = rect.right - 2;


    if ( xTouch < leftBoundry || xTouch > rightBoundary || yTouch < topBoundary ) {
      this.dropdown = false;
    }
  }

}

