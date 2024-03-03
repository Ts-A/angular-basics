import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
 selector: '[text-highlight-2]'
})
export class BetterDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
}
