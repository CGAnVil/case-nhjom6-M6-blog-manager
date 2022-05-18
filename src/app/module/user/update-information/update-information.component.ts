import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {
  user: User = {};

  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl(''),
    fullName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.getUserById(1);
  }

  get id() {
    return this.userForm.get('id');
  }

  get userName() {
    return this.userForm.get('userName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get avatar() {
    return this.userForm.get('avatar');
  }

  get fullName() {
    return this.userForm.get('fullName');
  }

  get address() {
    return this.userForm.get('address');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      this.id.setValue(this.user.id);
      this.userName.setValue(this.user.userName);
      this.email.setValue(this.user.email);
      this.avatar.setValue(this.user.avatar);
      this.fullName.setValue(this.user.fullName);
      this.address.setValue(this.user.address);
      this.phone.setValue(this.user.phone);
    })
  }

  editUser() {
    const formData = new FormData();
    formData.append('userName', this.userForm.get('userName').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('avatar', this.userForm.get('avatar').value);
    formData.append('fullName', this.userForm.get('fullName').value);
    formData.append('address', this.userForm.get('address').value);
    formData.append('phone', this.userForm.get('phone').value);
    this.userService.updateUser(1, formData).subscribe(() => {
      this.router.navigateByUrl('/users/detail-information');
      console.log("Edit success");
    }, error => {
      console.log("Edit Fail");
      this.router.navigateByUrl('/users/detail-information');
    })
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.file[0];
      this.userForm.get('image').setValue(file);
    }
  }
}
