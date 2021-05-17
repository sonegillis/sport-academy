import {Component, Input, OnInit} from '@angular/core';
import { IProfile } from 'src/app/model/IModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
