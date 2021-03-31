import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalizeName]'
})
export class CapitalizeNameDirective {

  constructor(private elem:ElementRef) { 
        this.elem.nativeElement.style.textTransform = 'capitalize';
  }

}
