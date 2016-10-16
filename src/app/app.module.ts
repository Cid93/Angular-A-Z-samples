import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { /*FormsModule*/ ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DireBonjourComponent } from './components/dire-bonjour/dire-bonjour.component';
import { /*TemplateDrivenFormComponent*/ } from './components/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { PostsComponent } from './components/posts/posts.component';

import { ApiService, MockApiService } from './shared/';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DireBonjourComponent,
    //TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [{
  provide: ApiService,
  useClass: MockApiService
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
