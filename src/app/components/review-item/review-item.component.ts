import {Component, Input, OnInit} from '@angular/core';
import {IReview} from '../../model/IModel';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  @Input() review: IReview;
  constructor() { }

  ngOnInit(): void {
  }

}
