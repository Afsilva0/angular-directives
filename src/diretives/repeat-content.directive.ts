import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatContent]',
})
export class RepeatContentDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set repeatContent(numero: number) {
    for (var i = 0; i < numero; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
