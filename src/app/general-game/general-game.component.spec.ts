import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGameComponent } from './general-game.component';

describe('GeneralGameComponent', () => {
  let component: GeneralGameComponent;
  let fixture: ComponentFixture<GeneralGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
