import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>(`${API_URL}/posts`);
  }

  getAllPostByUser(id): Observable<Post[]>{
    return this.http.get<Post[]>(`${API_URL}/posts/${id}/users`)
  }

  getPostById(id): Observable<Post>{
    return this.http.get<Post>(`${API_URL}/posts/${id}`);
  }

  createPost(post): Observable<Post>{
    return this.http.post(`${API_URL}/posts`, post);
  }

  editPost(id, post): Observable<Post>{
    return this.http.put(`${API_URL}/posts/${id}`,post);
  }

  deletePost(id): Observable<Post>{
    return this.http.delete<Post>(`${API_URL}/posts/${id}/BlockPost`);
  }

  unblockPost(id, {}): Observable<Post>{
    return this.http.put<Post> (`${API_URL}/posts/${id}`, {});
  }
}


