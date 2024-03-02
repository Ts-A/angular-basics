import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  counter: WritableSignal<number> = signal<number>(0);
  name: WritableSignal<string> = signal<string>('SIGNAL');
  doubleName: Signal<string> = computed(() => this.name + '.')

  constructor() {
    effect(() => console.log("Name has changed", this.name()));
    effect(() => console.log("Counter has changed", this.counter()));
  }

  public default(): void {
    this.name.set("Signal value changed from " + this.counter() + " to " + "0")
    this.counter.set(0);
  }

  public increment(): void {
    this.counter.update((prev) => ++prev);
  }
}
