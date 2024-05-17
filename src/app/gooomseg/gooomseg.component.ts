import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gooomseg',
  templateUrl: './gooomseg.component.html',
  styleUrl: './gooomseg.component.scss',
})
export class GooomsegComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('tset in ng destroy');
  }
}
