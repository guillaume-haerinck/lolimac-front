import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from 'app/shared/models/comment';
import { PostService } from 'app/modules/events/post.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() eventId: number;
  @Input() postId: number;
  @Output() updated = new EventEmitter<any>();

  commentForm: FormGroup;
  bEdit = false;
  bCreate = false;

  constructor(private m_postService: PostService,
    private m_formBuilder: FormBuilder) { 
    this.commentForm = this.m_formBuilder.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitCreateForm(): void {
    this.m_postService.createComment(this.eventId, this.postId, this.commentForm.value).subscribe(result => {
      this.bCreate = false;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  submitEditForm(commentId: number): void {
    this.m_postService.updateComment(this.eventId, this.postId, commentId, this.commentForm.value).subscribe(result => {
      this.bEdit = false;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  deleteComment(commentId: number): void {
    this.m_postService.deleteComment(this.eventId, this.postId, commentId).subscribe(result => {
      this.updated.emit(undefined);
    }, error => {

    });
  }

}
