import { Component, OnInit, Input } from '@angular/core';

import { Comment } from 'app/shared/models/comment';
import { PostService } from 'app/modules/events/post.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[]

  constructor(private m_postService: PostService) { }

  ngOnInit() {
  }

}
