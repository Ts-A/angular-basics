import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrl: './local-reference.component.css'
})
export class LocalReferenceComponent {
  @ViewChild('divName', {static: true}) name: string;
}
