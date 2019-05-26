import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from 'app/shared/models/comment';
import { PostService } from 'app/modules/events/post.service';
import { AuthService } from 'app/core/services/auth.service';

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
  userId: number;
  commentIdToUpdate: number;

  constructor(private m_postService: PostService,
    private m_formBuilder: FormBuilder,
    authService: AuthService) { 
    this.commentForm = this.m_formBuilder.group({
      content: ['', Validators.required]
    });

    this.userId = authService.getUserId();
  }

  ngOnInit() {
  }

  submitCreateForm(): void {
    this.m_postService.createComment(this.eventId, this.postId, this.commentForm.value).subscribe(result => {
      this.updated.emit(undefined);
    }, error => {

    });
  }

  submitEditForm(): void {
    this.m_postService.updateComment(this.eventId, this.postId, this.commentIdToUpdate, this.commentForm.value).subscribe(result => {
      this.bEdit = false;
      this.commentIdToUpdate = undefined;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  deleteComment(): void {
    this.m_postService.deleteComment(this.eventId, this.postId, this.commentIdToUpdate).subscribe(result => {
      this.bEdit = false;
      this.commentIdToUpdate = undefined;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  patchForm(comment: Comment | undefined): void {
    if (comment == undefined) {
      this.commentForm.patchValue({
        content: ''
      });
    } else {
      this.commentForm.patchValue({
        content: comment.content
      });
    }
  }

}
