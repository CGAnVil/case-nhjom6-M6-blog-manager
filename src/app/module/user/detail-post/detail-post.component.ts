import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post/post.service';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  post: Post = {};

  postForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    dateCreate: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    description: new FormControl(''),
    avatarPost: new FormControl(''),
    category: new FormControl(''),
    user: new FormControl(''),
    status: new FormControl(''),
    state: new FormControl('')
  });

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getPostById(id);
    });
  }

  ngOnInit() {
  }

  get id() {
    return this.postForm.get('id');
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }

  get avatarPost() {
    return this.postForm.get('avatarPost');
  }

  get status() {
    return this.postForm.get('status');
  }

  getPostById(id) {
    // const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
      this.id.setValue(this.post.id);
      this.title.setValue(this.post.title);
      this.content.setValue(this.post.content);
      this.avatarPost.setValue(this.post.avatarPost);
      this.status.setValue(this.post.status.name);
    }, error => {
      console.log('Get post detail error');
    });
  }

}
