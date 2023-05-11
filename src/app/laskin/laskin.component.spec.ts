import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaskinComponent } from './laskin.component';

describe('LaskinComponent', () => {
  let component: LaskinComponent;
  let fixture: ComponentFixture<LaskinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaskinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaskinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
