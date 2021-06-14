import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() menuClick = new EventEmitter();
  @ViewChild('myHeader') header: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

}
