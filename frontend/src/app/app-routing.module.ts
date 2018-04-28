import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { WriterGuard } from './guards/writer.guard';
import { HomeComponent } from './components/home/home.component';
import { CreateblogComponent } from './components/writer/createblog/createblog.component';
import { WriterhomeComponent } from './components/writer/writerhome.component';
import { EditblogComponent } from './components/writer/editblog/editblog.component';
import { DeleteblogComponent } from './components/writer/deleteblog/deleteblog.component';


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent // Register Route
 // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent // Login Route// User must NOT be logged in to view this route
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [WriterGuard] // Login Route// User must NOT be logged in to view this route
  },
  {
    path: 'writer',
    component: WriterhomeComponent,
    canActivate: [WriterGuard]  // Login Route// User must NOT be logged in to view this route
  },
  {
    path: 'writer/newblog',
    component: CreateblogComponent // Login Route// User must NOT be logged in to view this route
  },
  {
    path: 'writer/edit-blog/:id',
    component : EditblogComponent
  },
  {
    path: 'writer/delete-blog/:id',
    component: DeleteblogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }