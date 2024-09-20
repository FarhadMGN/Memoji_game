import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFliper]'
})
export class FliperDirective {

  @Input() dStyles: {name: string};
  wasFirst = false;
  first;
  second;
  firstName = '';
  secondName = '';

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('click', ['$event.target']) onClick(event: Element) {

    console.log('first? ', this.wasFirst);

    this.r.setStyle(this.el.nativeElement, 'transform', 'rotateY(180deg)');

    function checkOnMatch(fst, snd) {
      if (fst === snd) {
        console.log('yes');
        return;
      } else {
        console.log('no');
      }
    }
    if (!this.wasFirst) {
      this.wasFirst = true;
      this.firstName = this.dStyles.name;
      this.first = this.el.nativeElement;
      return;
    }
    this.wasFirst = false;
    this.secondName = this.dStyles.name;
    this.second = this.el.nativeElement;
    checkOnMatch(this.firstName, this.secondName);

    //console.log('1 name is ', this.firstName);
    //console.log('2 name is ', this.secondName);
  }

}
