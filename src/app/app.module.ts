import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BackgroundColorDirective } from '../diretives/background-color.directive';
import { RepeatContentDirective } from '../diretives/repeat-content.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BackgroundColorDirective,
    RepeatContentDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
