import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularDetailsComponent } from './angular-details.component';
import { MaterialModule } from './material-module';
import { ChipsComponent } from './controls/chips/chips.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, AngularDetailsComponent, ChipsComponent],
  bootstrap: [AppComponent],
  entryComponents: [ChipsComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
