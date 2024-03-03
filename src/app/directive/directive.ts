import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[text-highlight-1]',
})
export class GreenDirective {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
