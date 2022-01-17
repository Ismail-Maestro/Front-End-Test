import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PalindromeService } from 'src/services/palindrome-service/palindrome.service';
import { PalindromeComponent } from './palindrome.component';



describe('PalindromeComponent', () => {
	let component: PalindromeComponent;
	let fixture: ComponentFixture<PalindromeComponent>;
	let route: ActivatedRoute;
	 
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PalindromeComponent],
			providers: [
				PalindromeService,
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: { paramMap: { get: function(word: string) { return word; } } }
					}
				}
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PalindromeComponent);
		route = TestBed.inject(ActivatedRoute);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('message must be "OK"', () => {
		route.snapshot.paramMap.get = function(word: string) { return "stats"; };
		fixture = TestBed.createComponent(PalindromeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		expect(component.message).toBe("OK");
	});
	
	it('message must be "KO"', () => {
		route.snapshot.paramMap.get = function(word: string) { return "statsooo"; };
		fixture = TestBed.createComponent(PalindromeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		expect(component.message).toBe("KO");
	});

});
