import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { UserDetail } from './components/user-detail/user-detail';
import { UserForm } from './components/user-form/user-form';
import { Navbar } from './components/navbar/navbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Home,
    UserDetail,
    UserForm,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
