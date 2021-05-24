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
      imageUrl: 'assets/images/coaches/coach-epah-fasi.jpg',
      name: 'Epah Gyavira Fasi',
      post: 'Main Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coaches/coach-pagou-david.jpg',
      name: 'Pagou David',
      post: '1st Assistant Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coaches/coach-romuald.jpg',
      name: 'Kemenang Romuald',
      post: '2nd Assistant Coach',
      description: ''
    }
  ];
  faqs = [
    {
      question: 'What is the motto of your football academy that the logo represents',
      answer: 'The Red stripes represents Danger, the Black "M" represents Mourning' +
        'and the White stripes bring back peace to stand for Diamond Star '
    },
    {
      question: 'What is the aim and the purpose of the Academy?',
      answer: 'To develope the talent of the children of South West region (FAKO) ' +
        'to make their dreams through'
    },
    {
      question: 'For how long has this academy been operating?',
      answer: 'From 2017 till date'
    },
    {
      question: 'Is the Academy National or International?',
      answer: 'International'
    },
    {
      question: 'Who is the CEO and what are his dreams in forming the academy?',
      answer: 'Joseph Epoto Mukete and his dream is to help the young Cameroonian ' +
        'footballers in all level of their professional carriers'
    },
    {
      question: 'What are some of the achievements of the academy?',
      answer: 'So far, the Academy was able to formed a 3rd Division team, and' +
        ' went as far as sending out 6 of it\'s best to the 1st Division team in Cameroon'
    },
    {
      question: 'What are the conditions to registered a player in the academy?',
      answer: 'There is a registration fee of 7500 XAF and the player is going to ' +
        'be issued all training equipment'
    }
  ]
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
