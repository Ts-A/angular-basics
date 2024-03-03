import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  elements = [1,2,3];

  handleRemove() {
    this.elements.splice(0, 1);
  }
}
