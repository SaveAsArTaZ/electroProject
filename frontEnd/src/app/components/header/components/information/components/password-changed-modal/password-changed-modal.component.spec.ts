import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangedModalComponent } from './password-changed-modal.component';

describe('PasswordChangedModalComponent', () => {
  let component: PasswordChangedModalComponent;
  let fixture: ComponentFixture<PasswordChangedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordChangedModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordChangedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
