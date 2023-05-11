import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertaileComponent } from './vertaile.component';

describe('VertaileComponent', () => {
  let component: VertaileComponent;
  let fixture: ComponentFixture<VertaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertaileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
