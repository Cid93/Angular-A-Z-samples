import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { /*FormsModule*/ ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DireBonjourComponent } from './components/dire-bonjour/dire-bonjour.component';
import { /*TemplateDrivenFormComponent*/ } from './components/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DireBonjourComponent,
    //TemplateDrivenFormComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
