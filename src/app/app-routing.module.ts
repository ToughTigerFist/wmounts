import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { CharacterSearchComponent } from './character-search/character-search.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: CreateAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'character', component: CharacterSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
