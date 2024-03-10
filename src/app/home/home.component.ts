import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  ngOnInit() {
    // const customIntervalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     ++count;
    //     observer.next(count)
    //     if(count > 3) observer.complete();
    //   }, 1000)
    // })

    // customIntervalObservable.pipe(map((data: any) => {return data})).subscribe((res) => {console.log(res)})
  }
}
