import {
  NgModule,
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: Event, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective],
})
export class ClickOutsideDirectiveModule {}
