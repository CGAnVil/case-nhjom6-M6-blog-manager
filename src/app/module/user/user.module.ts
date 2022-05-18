import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListPostComponent } from './list-post/list-post.component';
import {NavbarComponent} from '../../shared/user/navbar/navbar.component';
import {SidebarComponent} from '../../shared/user/sidebar/sidebar.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailInformationComponent } from './detail-information/detail-information.component';
import { UpdateInformationComponent } from './update-information/update-information.component';


@NgModule({
  declarations: [ListPostComponent, NavbarComponent, SidebarComponent, DetailPostComponent, DetailInformationComponent, UpdateInformationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
