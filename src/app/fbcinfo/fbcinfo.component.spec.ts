import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcinfoComponent } from './fbcinfo.component';

describe('FbcinfoComponent', () => {
  let component: FbcinfoComponent;
  let fixture: ComponentFixture<FbcinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbcinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbcinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
