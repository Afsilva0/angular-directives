import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[fontSizeColor]',
})
export class FontSizeColorDirective implements OnChanges {
  @Input() fontSize: string;
  @Input() color: string;
  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    if (this.fontSize) {
      this.elementRef.nativeElement.style.fontSize = this.fontSize;
    }

    if (this.color) {
      this.elementRef.nativeElement.style.color = this.color;
    }
  }
}
