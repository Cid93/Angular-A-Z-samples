 import { RouterModule } from '@angular/router';
 import { AppComponent } from './app.component';
 import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
 import { PostsComponent } from './components/posts/posts.component';

export let routes = RouterModule.forRoot([
  { path: '', component: ModelDrivenFormComponent },
  { path: 'compte', component: ModelDrivenFormComponent },
  { path: 'posts', component: PostsComponent }
]);