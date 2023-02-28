import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeistaComponent } from './meista.component';

describe('MeistaComponent', () => {
  let component: MeistaComponent;
  let fixture: ComponentFixture<MeistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
