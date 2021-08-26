import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookCreateComponent} from './book-create/book-create.component';

const routes: Routes = [{
  path: 'login',
  component: UserComponent,
}, {
  path: 'books',
  component: BookListComponent,
}, {
  path: 'books/book-edit/:id',
  component: BookEditComponent,
}, {
  path: 'books/create',
  component: BookCreateComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
