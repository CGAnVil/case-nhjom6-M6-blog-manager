import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListPostComponent } from './list-post/list-post.component';
import {NavbarComponent} from '../../shared/user/navbar/navbar.component';
import {SidebarComponent} from '../../shared/user/sidebar/sidebar.component';


@NgModule({
  declarations: [ListPostComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
