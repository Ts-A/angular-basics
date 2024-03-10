import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  elements = [1,2,3];

  handleRemove() {
    this.elements.splice(0, 1);
  }
}
