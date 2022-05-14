import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import {NavbarComponent} from '../../shared/admin/navbar/navbar.component';
import {SidebarComponent} from '../../shared/admin/sidebar/sidebar.component';
import { ListPostComponent } from './list-post/list-post.component';



@NgModule({
  declarations: [ListUserComponent, NavbarComponent, SidebarComponent, ListPostComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
