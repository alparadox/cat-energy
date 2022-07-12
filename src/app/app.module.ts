import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
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
import { NecessityComponent } from './necessity/necessity.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    InputIconComponent,
    FooterComponent,
    NecessityComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    FormsModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  entryComponents: [ModalWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
