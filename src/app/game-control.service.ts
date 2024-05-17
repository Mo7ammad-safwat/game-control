import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  private lastNumber = 0;
  private interval: any;
  numberEmitted = new Subject<Number>();

  startGame() {
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.numberEmitted.next(this.lastNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
    console.log("stop")
  }
  shomsg()
  {
    console.log("good masg destroy ")
  }
}
