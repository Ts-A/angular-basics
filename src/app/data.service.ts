import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
getOk() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok')
    }, 3000)
  })
}

  constructor() { }
}
