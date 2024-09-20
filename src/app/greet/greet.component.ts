import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['../../assets/themes/base/styles/greet.component.css']
})
export class GreetComponent implements OnInit {
  @Output() inGame = new EventEmitter<number>();
  a: number = 10;

  constructor() { }

  ngOnInit() {
  }

  public onStartClick(num: number): void {
    this.inGame.emit(num);
  }
}
