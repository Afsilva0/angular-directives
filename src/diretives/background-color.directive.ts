import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[backgroundColor]',
})
export class BackgroundColorDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() set backgroundColor(color: string) {
    if (color) {
      this.elementRef.nativeElement.style.backgroundColor = color;
    }
  }
}
