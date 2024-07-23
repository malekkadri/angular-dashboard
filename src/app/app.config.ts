import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
};
