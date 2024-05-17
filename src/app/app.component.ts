import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameControlService } from './game-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'game-control-evnt-ode';
  shogoodmasge = false;
  oddNumbers: any = [];
  evenNumbers: any = [];
  numbers: any = [];

  constructor(private gameControlService: GameControlService) {}

  ngOnInit() {
    this.gameControlService.numberEmitted.subscribe((number: any) => {
      if (number % 2 === 0) {
        this.evenNumbers.push(number);
      } else {
        this.oddNumbers.push(number);
      }
      this.numbers.push(number);
      console.log('good add ', number, this.evenNumbers, this.oddNumbers);
    });
  }
  shomsg() {
    this.shogoodmasge = !this.shogoodmasge; 
  }
  ngOnDestroy(): void {
    console.log('tset in ng destroy');
  }
}
