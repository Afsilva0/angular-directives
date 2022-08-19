import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from '../diretives/background-color.directive';
import { RepeatContentDirective } from '../diretives/repeat-content.directive';
import { FontSizeColorDirective } from '../diretives/font-size-color.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    RepeatContentDirective,
    FontSizeColorDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
