import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluxPalindromeService } from 'src/services/flux-palindrome-service/flux-palindrome.service';
import { PalindromeService } from 'src/services/palindrome-service/palindrome.service';

import { FluxPalindromeComponent } from './flux-palindrome.component';

describe('FluxPalindromeComponent', () => {
	let component: FluxPalindromeComponent;
	let fixture: ComponentFixture<FluxPalindromeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FluxPalindromeComponent],
			providers: [
				FluxPalindromeService,
				PalindromeService,
				HttpClient,
				HttpHandler
			]
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
