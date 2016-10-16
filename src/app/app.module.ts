import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DireBonjourComponent } from './components/dire-bonjour/dire-bonjour.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DireBonjourComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
