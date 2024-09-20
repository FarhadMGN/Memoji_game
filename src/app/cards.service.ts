import { Injectable } from '@angular/core';
import {Card, cardsArr} from '../mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor() { }
  public getCards(): Card[] {
    const cards = cardsArr;
    return cards;
  }
}
