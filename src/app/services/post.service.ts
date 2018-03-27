import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: Http) { 

  }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })) //Using PATCH method
    //this.http.put(this.url, JSON.stringify(post)) //Using PUT method
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
  }

}

  