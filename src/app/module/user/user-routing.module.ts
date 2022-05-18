import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPostComponent} from './list-post/list-post.component';
import {DetailPostComponent} from './detail-post/detail-post.component';
import {DetailInformationComponent} from './detail-information/detail-information.component';
import {UpdateInformationComponent} from './update-information/update-information.component';


const routes: Routes = [
  {
    path: '',
    component: ListPostComponent
  },
  {
    path: `detail/:id`,
    component: DetailPostComponent
  },
  {
    path: `detail-information`,
    component: DetailInformationComponent
  },
  {
    path: `edit`,
    component: UpdateInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
