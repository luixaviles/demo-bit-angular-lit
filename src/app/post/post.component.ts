import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogService } from '../blog/blog.service';
import { Post } from '../blog/post';

import '@luixaviles/demo-lit.ui.button';
import '@luixaviles/demo-lit.ui.card';
import '@luixaviles/demo-lit.ui.card-title';
import '@luixaviles/demo-lit.ui.card-content';
import '@luixaviles/demo-lit.ui.card-actions';

@Component({
  selector: 'corp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$?: Observable<Post>;

  constructor(
    private readonly blogService: BlogService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id') as string;
        return this.blogService.getPost(+id);
      })
    );
  }
}
