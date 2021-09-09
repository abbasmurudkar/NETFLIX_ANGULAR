import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOVIESPAGESComponent } from './moviespages.component';

describe('MOVIESPAGESComponent', () => {
  let component: MOVIESPAGESComponent;
  let fixture: ComponentFixture<MOVIESPAGESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOVIESPAGESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOVIESPAGESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
