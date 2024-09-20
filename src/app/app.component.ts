import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChildren(CardComponent, {read: ElementRef}) cards: QueryList<ElementRef>
  title = 'Game';

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  //   function shuffle(arr) {
  //     var j, temp;
  //     for(var i = arr.length - 1; i > 0; i--){
  //       j = Math.floor(Math.random() * (i + 1));
  //       temp = arr[j];
  //       arr[j] = arr[i];
  //       arr[i] = temp;
  //     }
  //     return arr;
  //   }
  //   this.cardsArr = shuffle(this.cardsArr);
  }
}
