import { Component, OnInit } from '@angular/core';

import '@luixaviles/demo-lit.ui.button';
import '@luixaviles/demo-lit.ui.card';
import '@luixaviles/demo-lit.ui.card-title';
import '@luixaviles/demo-lit.ui.card-content';
import '@luixaviles/demo-lit.ui.card-actions';
import { BlogService } from './blog.service';
import { Post } from './post';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'corp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$?: Observable<Post[]>;

  constructor(private readonly blogService: BlogService, private readonly router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.getPosts();
  }

  handleReadMore(post: Post): void {
    this.router.navigate(['blog', post.id]);
  }
}
