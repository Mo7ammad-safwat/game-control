import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooomsegComponent } from './gooomseg.component';

describe('GooomsegComponent', () => {
  let component: GooomsegComponent;
  let fixture: ComponentFixture<GooomsegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GooomsegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GooomsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
