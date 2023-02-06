import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionInfoComponent } from './admission-info.component';

describe('AdmissionInfoComponent', () => {
  let component: AdmissionInfoComponent;
  let fixture: ComponentFixture<AdmissionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
