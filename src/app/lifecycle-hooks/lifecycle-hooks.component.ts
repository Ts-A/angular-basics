import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {
  @Input('name') name = 0;
  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes) {
    console.log("on changes", changes)
  }

  ngOnInit() {
    console.log('on init')
  }

  ngDoCheck() {
    console.log('do check')
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content init checked')
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view init checked')
  }

  ngOnDestroy() {
    console.log('destroyed')
  }
}
