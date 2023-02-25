import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalReportComponent } from './withdrawal-report.component';

describe('WithdrawalReportComponent', () => {
  let component: WithdrawalReportComponent;
  let fixture: ComponentFixture<WithdrawalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
