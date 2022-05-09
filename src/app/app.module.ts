import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { PrimaryContentComponent } from './views/primary-content/primary-content.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactReadComponent } from './components/contacts/contact-read/contact-read.component';
import { ContactsDeleteComponent } from './components/contacts/contacts-delete/contacts-delete.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { ContactFavoriteComponent } from './components/contacts/contact-favorite/contact-favorite.component';
import { ContactCreateComponent } from './components/contacts/contact-create/contact-create.component';
import { ContactUpdateComponent } from './components/contacts/contact-update/contact-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PrimaryContentComponent,
    HeaderComponent,
    ContactReadComponent,
    ContactsDeleteComponent,
    HomeComponent,
    ContactFavoriteComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
