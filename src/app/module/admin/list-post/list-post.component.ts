import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post/post.service';

declare var $: any;

declare var Swal: any;

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getAllPost().subscribe(listPost => {
      this.posts = listPost;
      $(function() {
        $('#post-list').DataTable({
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
      console.log("Get listPost error");
    })
  }

  getAllAfterBlockPost() {
    this.postService.getAllPost().subscribe(listPost => {
      this.posts = listPost;
    }, error => {
      console.log("Get listPost error");
    })
  }

  blockPost(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deletePost(id).subscribe(() => {
          console.log("Block post success");
          this.getAllAfterBlockPost()
        }, error => {
          console.log("Block post fail");
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
