import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[text-highlight-4]'
})
export class HostBindingDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string = 'transparent';
ngOnInit() {
    this.backgroundColor = 'yellow'
  }
}
