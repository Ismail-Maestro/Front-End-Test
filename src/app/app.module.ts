import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FluxPalindromeComponent } from './flux-palindrome/flux-palindrome.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    FluxPalindromeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
