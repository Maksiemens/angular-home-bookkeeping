import { NgModule, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopPropagation]',
})
export class StopPropagationDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

@NgModule({
  declarations: [StopPropagationDirective],
  exports: [StopPropagationDirective],
})
export class StopPropagationDirectiveModule {}
