import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRegisterComponent } from './game-register.component';

describe('GameRegisterComponent', () => {
  let component: GameRegisterComponent;
  let fixture: ComponentFixture<GameRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
