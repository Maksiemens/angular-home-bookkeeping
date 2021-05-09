import {
  NgModule,
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click', ['$event', '$event.target'])
  public onClick(event: Event, targetElement: HTMLElement) {
    this.isOpen = !this.isOpen;
  }
}
@NgModule({
  declarations: [DropDownDirective],
  exports: [DropDownDirective],
})
export class DropDownDirectiveModule {}
