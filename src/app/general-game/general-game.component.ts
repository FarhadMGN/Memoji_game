import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../mock-cards';
import {CardsService} from '../cards.service';

@Component({
  selector: 'app-general-game',
  templateUrl: './general-game.component.html',
  styleUrls: ['../../assets/themes/base/styles/general-game.component.css']
})
export class GeneralGameComponent implements OnInit {
  @Input()cardNumber: number;

  cards: Card[] = [];
  wasFirst: boolean = false;
  firstCard: Card;
  secondCard: Card;
  matchedPair: number = 0;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.getCards();
    this.cards = this.cards.slice(0, this.cardNumber);
    this.cards.sort(() => Math.random() - 0.5);
  }

  public flipCard(card: Card) {
    if (!card.flipped) {
      card.flipped = !card.flipped;
      console.log("lalala", card);
      if (!this.wasFirst) {
        this.firstCard = card;
        this.wasFirst = true;
        return;
      }
      this.secondCard = card;
      this.wasFirst = false;
      this.checkOnMatch(this.firstCard, this.secondCard);
    }
  }

  private removeFlip(first: Card, second: Card) {
    setTimeout(() => {
      first.flipped = false;
      second.flipped = false;
    }, 500);
    this.firstCard = null;
    this.secondCard = null;
  }

  private checkOnMatch(fst: Card, snd: Card) {
    if (fst.name === snd.name) {
      this.saveFlipped(fst, snd);
      return;
    }
    this.removeFlip(fst, snd);
  }

  private saveFlipped(first, second) {
    this.firstCard = null;
    this.secondCard = null;
    this.matchedPair = this.matchedPair + 2;
    setTimeout(() => {
      first.matched = true;
      second.matched = true;
    }, 400);
    if (this.matchedPair === this.cardNumber) {
      let t = 500;
      this.cards.forEach((card: Card) => {
        t = t + 30;
        setTimeout(() => {
          card.matched = false;
          card.flipped = false;
        }, t);
      });
      this.matchedPair = 0;
    }
  }
}
