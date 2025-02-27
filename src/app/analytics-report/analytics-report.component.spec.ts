import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsReportComponent } from './analytics-report.component';

describe('AnalyticsReportComponent', () => {
  let component: AnalyticsReportComponent;
  let fixture: ComponentFixture<AnalyticsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
