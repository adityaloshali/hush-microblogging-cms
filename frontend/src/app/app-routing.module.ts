import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';


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
    canActivate: [AuthGuard] // Login Route// User must NOT be logged in to view this route
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