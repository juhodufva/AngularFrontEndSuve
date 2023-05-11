import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekisteroidyComponent } from './rekisteroidy.component';

describe('RekisteroidyComponent', () => {
  let component: RekisteroidyComponent;
  let fixture: ComponentFixture<RekisteroidyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekisteroidyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RekisteroidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
