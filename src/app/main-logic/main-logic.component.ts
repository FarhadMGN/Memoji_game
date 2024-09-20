import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logic',
  templateUrl: './main-logic.component.html',
  styleUrls: ['../../assets/themes/base/styles/main-logic.component.css']
})
export class MainLogicComponent implements OnInit {

  isWin: boolean;
  playAgain: boolean;
  inGame: boolean;
  cardNumber: number;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  private initialize(): void {
    this.isWin = false;
    this.playAgain = false;
    this.inGame = false;
  }
  public onYesClick(): void {
    this.playAgain = true;
    this.inGame = true;
  }
  public  onNoClick(): void {
    this.playAgain = false;
  }

  public onExitClick(): void {
    this.inGame = false;
  }

  public startGame(num: number) {
    this.inGame = true;
    this.cardNumber = num;
  }
}
