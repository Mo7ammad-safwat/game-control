import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss',
})
export class EvenComponent implements OnDestroy {
  @Input() number: any = [];
  ngOnDestroy(): void {
    console.log('tset in ng destroy');
  }
}
