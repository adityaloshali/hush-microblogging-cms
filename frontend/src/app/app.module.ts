import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
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
import { WritereditComponent } from './components/writer/writeredit/writeredit.component';
import { DeleteblogComponent } from './components/writer/deleteblog/deleteblog.component';
import { EditorhomeComponent } from './components/editorhome/editorhome.component';
import { EditorGuard } from './guards/editor.guard';
import { EditorService } from './services/editor.service';
import { CategoriesService } from './services/categories.service';
import { EditoreditComponent } from './components/editorhome/editoredit/editoredit.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { FormLimitDirective } from './directives/form-limit.directive';
import { EditorblogsComponent } from './components/editorhome/editorblogs/editorblogs.component';
import { CategoriesdashboardComponent } from './components/editorhome/categoriesdashboard/categoriesdashboard.component';


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
    WritereditComponent,
    DeleteblogComponent,
    EditorhomeComponent,
    EditoreditComponent,
    FormLimitDirective,
    EditorblogsComponent,
    CategoriesdashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CustomFormsModule
  ],
  providers: [AuthService, 
    WriterGuard, 
    WriterService, 
    EditorGuard, 
    EditorService,
    CategoriesService, 
    AuthGuard, 
    NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
