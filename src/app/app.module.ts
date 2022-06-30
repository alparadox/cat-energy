import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './ui/button/button.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { RadioComponent } from './ui/radio/radio.component';
import { InputComponent } from './ui/input/input.component';
import { InputIconComponent } from './ui/input-icon/input-icon.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    InputIconComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
