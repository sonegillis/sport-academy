import { Component, OnInit } from '@angular/core';
import {IProfile, IReview} from '../../model/IModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coaches: IProfile[] = [
    {
      imageUrl: 'assets/images/coache1.png',
      name: 'Mekolle Sone Gillis',
      post: 'Main Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coache2.png',
      name: 'Awasume Boris',
      post: 'Training Assitant',
      description: ''
    },
    {
      imageUrl: 'assets/images/coache3.png',
      name: 'Nkuta Dave',
      post: 'Goalkeeper Training Assistant',
      description: ''
    },
    {
      imageUrl: 'assets/images/coache4.png',
      name: 'Elizabeth Prisca',
      post: 'Training Assitant',
      description: ''
    },
  ];
  reviews: IReview[] = [
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
