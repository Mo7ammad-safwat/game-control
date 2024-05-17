import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss',
})
export class GameControlComponent implements OnInit, OnDestroy {
  constructor(private gameControlService: GameControlService) {}

  ngOnInit(): void {}

  onStartGame() {
    this.gameControlService.startGame();
  }

  onStopGame() {
    this.gameControlService.stopGame();
  }

  ngOnDestroy(): void {
    console.log("tset in ng destroy")
    
    this.gameControlService.stopGame();
  }
}
