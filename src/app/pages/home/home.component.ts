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
      imageUrl: 'assets/images/coaches/coach-pagou-david.jpg',
      name: 'Mr. Pagou David',
      post: 'Main Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coaches/coach-epah-fasi.jpg',
      name: 'Mr. Epah Gyavira Fasi',
      post: '1st Assistant Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coaches/coach-romuald.jpg',
      name: 'Mr. Kemenang Romuald',
      post: '2nd Assistant Coach',
      description: ''
    },
    {
      imageUrl: 'assets/images/coaches/yolande-silvie.jpg',
      name: 'Mme. Yolande Silvie',
      post: 'Medical Staff',
      description: ''
    }
  ];
  faqs = [
    {
      question: 'What is the motto of your Fako Diamond Football Academy and what does the logo represent?',
      answer: 'The red stripes on the logo represent ‘Danger’,' +
        ' the black "M" stands for ‘Mourning’ and the white stripes ' +
        'stand for the return of peace. Peace overcomes danger and ' +
        'mourning and this is what Diamond Star is all about. '
    },
    {
      question: 'What is the aim/purpose of the Academy?',
      answer: 'To detect and develop the talents of the children of the South West region (FAKO) of Cameroon ' +
        'in order to enhance their dreams of becoming professional footballers'
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
      question: 'Who is the CEO and what is his dream about the academy?',
      answer: 'Joseph Epoto Mukete and his dream is to help young Cameroonian ' +
        'footballers at all levels of their professional career'
    },
    {
      question: 'What are some of the achievements of the academy?',
      answer: 'So far, the Academy has formed football team that competes in the 3rd Division tier in Cameroon. ' +
        'Until now, 6 players from this team have been recruited in 1st Division teams in Cameroon. '
    },
    {
      question: 'What are the conditions for registering a player in the academy?',
      answer: 'There is a registration fee of 10000 XAF and this is mainly for the training' +
        ' equipments the player will receive from the academy'
    }
  ]
  reviews: IReview[] = [
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Mr. Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Mr. Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
    {
      description: 'Marcus Lemonsis is absolutely the best, I went from a 10 to a 6 and am still there',
      name: 'Mr. Michael Bean',
      imageUrl: 'src/assets/images/football-bg2.jpg'
    },
  ];
  team: IProfile[] = [
    {
      imageUrl: 'assets/images/team/joseph-epoto-mukete.jpg',
      name: 'Mr. Joseph Epoto Mukete',
      post: 'CEO',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/albert-mukete.jpg',
      name: 'Chief Albert Mukete',
      post: 'President',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/ndoki-mukete.png',
      name: 'Prince Ndoki Mukete',
      post: 'Chairman (God Father)',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/ngayap-irene-florence.jpg',
      name: 'Mme. Ngayap Irene Florence',
      post: 'Treasurer',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/emma-maloba-kumbe.jpg',
      name: 'Mme. Emma Maloba Kumbe',
      post: 'Secretary General 1',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/fokumlah-didier.jpg',
      name: 'Mr. Fokumlah Didier',
      post: 'Secretary General 2',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/lowe-keuzetien.jpg',
      name: 'Mr. Lowe Keuzetien',
      post: 'Adviser / Counsellor 1',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/nkamtoh-ajoyaius-njopakaba.jpg',
      name: 'Mr. Nkamtoh Ajoyaius Njopakaba',
      post: 'Adviser / Counsellor 2',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/tchoua-tchoto-aline.jpg',
      name: 'Mme. Tchoua Tchoto Aline',
      post: 'Adviser / Counsellor 3',
      description: ''
    },
    {
      imageUrl: 'assets/images/team/gillis.jpeg',
      name: 'Mr. Sone Gillis',
      post: 'Software Engineer',
      description: ''
    }
  ];
  options = {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 790px
      790: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }
}
