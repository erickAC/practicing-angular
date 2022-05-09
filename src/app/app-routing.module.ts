import { ContactUpdateComponent } from './components/contacts/contact-update/contact-update.component';
import { ContactCreateComponent } from './components/contacts/contact-create/contact-create.component';
import { ContactFavoriteComponent } from './components/contacts/contact-favorite/contact-favorite.component';
import { PrimaryContentComponent } from './views/primary-content/primary-content.component';
import { AppComponent } from './app.component';
import { ContactsDeleteComponent } from './components/contacts/contacts-delete/contacts-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: PrimaryContentComponent
  },
  {
    path: "contact/delete/:id",
    component: ContactsDeleteComponent
  },
  {
    path: "contact/favorito/:id",
    component: ContactFavoriteComponent
  },
  {
    path: "contact/create",
    component: ContactCreateComponent
  },
  {
    path: "contact/update/:id",
    component: ContactUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
