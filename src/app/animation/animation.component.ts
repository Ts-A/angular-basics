import { canDeactivate } from './../canDeactivate.service';
import { ActivatedRoute, CanDeactivate } from '@angular/router';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations: [
    trigger('slide', [
      state(
        'first_state',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'second_state',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)',
        })
      ),
      state(
        'third_state',
        style({
          backgroundColor: 'green',
          transform: 'scale(0.1)',
        })
      ),
      transition('first_state => second_state', animate(300)),
      transition('second_state => first_state', animate(800)),
      transition(
        'first_state => third_state',
        animate(
          1000,
          keyframes([
            style({
              backgroundColor: 'blue',
              transform: 'scale(0.5)',
              offset: 0.5,
            }),
            style({
              backgroundColor: 'green',
              transform: 'scale(0.1)',
              offset: 1,
            }),

          ])
        )
      ),
    ]),
  ],
})
export class AnimationComponent  {
  state = 'first_state';
  public close = false;

  constructor(private route: ActivatedRoute) {}

  onAnimate() {
    this.state = this.state === 'first_state' ? 'second_state' : 'first_state';
    this.close = true;
  }

  onShrink() {
    this.state = 'third_state';
    this.close = false;
  }

  ngOnInit() {
    this.route.data.subscribe((res) => {
      console.log(res)
    })
  }

}
