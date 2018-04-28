import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { WriterGuard } from './guards/writer.guard';
import { HomeComponent } from './components/home/home.component';
import { CreateblogComponent } from './components/writer/createblog/createblog.component';
import { WriterhomeComponent } from './components/writer/writerhome.component';
import { WriterService } from './services/writer.service';
import { EditblogComponent } from './components/writer/editblog/editblog.component';
import { DeleteblogComponent } from './components/writer/deleteblog/deleteblog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProtectedComponent,
    HomeComponent,
    CreateblogComponent,
    WriterhomeComponent,
    EditblogComponent,
    DeleteblogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, WriterGuard, WriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
