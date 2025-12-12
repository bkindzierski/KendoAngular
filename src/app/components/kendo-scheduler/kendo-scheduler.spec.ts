import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoScheduler } from './kendo-scheduler';

describe('KendoScheduler', () => {
  let component: KendoScheduler;
  let fixture: ComponentFixture<KendoScheduler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KendoScheduler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoScheduler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
