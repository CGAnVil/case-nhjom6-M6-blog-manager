import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUserComponent} from './list-user/list-user.component';
import {ListPostComponent} from './list-post/list-post.component';


const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'posts',
    component: ListPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
