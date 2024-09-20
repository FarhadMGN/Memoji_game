import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  @ContentChild('cardsRef', {static: true}) crdsRef: ElementRef;


  constructor() {
  }


  ngOnInit() {
    const cards = document.querySelectorAll('.card');

    function saveFliped() {
      first.removeEventListener('clic', flipCard);
      second.removeEventListener('clic', flipCard);

      setTimeout(() => {
        first.childNodes[1].classList.toggle('green');
        second.childNodes[1].classList.toggle('green');
      }, 500);
    }

    function removeFlip() {
      setTimeout(() => {

        first.classList.remove('flip');
        second.classList.remove('flip');

      }, 500);

    }

    function checkOnMatch(fst, snd) {
      if (fst.dataset.framework === snd.dataset.framework) {
        saveFliped();
        return;
      }
        removeFlip();
    }


    let wasFirst = false;
    let first, second;

    function flipCard() {
      this.classList.add('flip');

      if (!wasFirst) {
        first = this;
        wasFirst = true;
        return;
      }
        second = this;
        wasFirst = false;
        checkOnMatch(first, second);
    }
    cards.forEach(cards => {
      cards.addEventListener('click', flipCard);
    });

    (function shuffle() {
      cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        (<HTMLElement>card).style.order = String(ramdomPos);
      });
    })();
  }
}
