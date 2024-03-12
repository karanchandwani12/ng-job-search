import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDescriptionComponent } from './jobs-description.component';

describe('JobsDescriptionComponent', () => {
  let component: JobsDescriptionComponent;
  let fixture: ComponentFixture<JobsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
