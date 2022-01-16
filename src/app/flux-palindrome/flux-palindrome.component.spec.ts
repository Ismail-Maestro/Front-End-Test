import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxPalindromeComponent } from './flux-palindrome.component';

describe('FluxPalindromeComponent', () => {
  let component: FluxPalindromeComponent;
  let fixture: ComponentFixture<FluxPalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxPalindromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
