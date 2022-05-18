import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user/user.service';

declare var $: any;

declare var Swal: any;


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];

  constructor(private adminService: UserService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.adminService.getAllUser().subscribe(listUser => {
      this.users = listUser;
      $(function() {
        $('#user-list').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': true,
          'ordering': true,
          'info': true,
          'autoWidth': false,
          'responsive': true,
        });
      });
    }, error => {
      console.log('Get listUser Error');
    });
  }

  getAllAfterBlock() {
    this.adminService.getAllUser().subscribe(listUser => {
      this.users = listUser;
    }, error => {
      console.log('Error');
    });
  }

  blockUser(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Confirm to block user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteUser(id).subscribe(() => {
          console.log('Block success');
          this.getAllAfterBlock();
        }, error => {
          console.log('Block error');
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }

  unBlockUser(id: number) {
    this.adminService.unBlockUser(id).subscribe(() => {
      console.log('unBlock success');
      this.getAllAfterBlock();
    }, error => {
      console.log('unBlock error');
    });
  }
}
