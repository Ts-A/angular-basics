import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[text-highlight-5]'
})
export class InputtingDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'grey';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
