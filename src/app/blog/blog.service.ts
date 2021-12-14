import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';
import { Post } from './post';

const DATA: Post[] = [
  {
    id: 0,
    author: 'luixaviles',
    title: 'Introduction to Web Components',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet dolor ac lectus interdum, sed tristique felis pharetra. Aenean commodo dui ut cursus pharetra',
  },
  {
    id: 1,
    author: 'luixaviles',
    title: 'Component-Driven Development',
    content:
      'Sed id fermentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sapien est, blandit non fermentum quis, egestas eget tortor',
  },
  {
    id: 2,
    author: 'luixaviles',
    title: 'How to Import Bit Components',
    content:
      'Etiam laoreet, nisl at gravida porta, ligula tellus ornare mi, sit amet laoreet augue justo nec diam. Phasellus mi lacus, interdum eget mauris id, pretium sagittis nisl',
  },
];

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(DATA).pipe(delay(1000));
  }

  getPost(id: number): Observable<Post> {
    return of(DATA[id]).pipe(delay(1000));
  }
}
