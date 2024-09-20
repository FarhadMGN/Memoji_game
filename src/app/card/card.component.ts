import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../assets/themes/base/styles/card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  flipped: boolean = false;

  constructor() { }

  ngOnInit() {
    this.flipped = false;
  }

}
