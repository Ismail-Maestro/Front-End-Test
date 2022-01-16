import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluxPalindromeComponent } from './flux-palindrome/flux-palindrome.component';
import { PalindromeComponent } from './palindrome/palindrome.component';

const routes: Routes = [
	{path: 'start/:mot', component: PalindromeComponent},
	{path: 'fluxPalindromes', component: FluxPalindromeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
