import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routeExternal(url: string) {
    window.open(url, '_blank').focus();
  }

}
