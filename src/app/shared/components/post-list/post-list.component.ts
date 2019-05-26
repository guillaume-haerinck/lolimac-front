import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from 'app/shared/models/post';
import { PostService } from 'app/modules/events/post.service';
import { AuthService } from 'app/core/services/auth.service';

enum PostState {
  Read,
  Create,
  Update
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @Input() eventId: number;
  @Output() updated = new EventEmitter<any>();
  
  postForm: FormGroup;
  postState = PostState;
  currentState = PostState.Read;
  userId: number;
  postIdToUpdate: number;

  constructor(private m_postService: PostService,
    private m_formBuilder: FormBuilder,
    authService: AuthService) {
    this.postForm = this.m_formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.userId = authService.getUserId();
  }

  ngOnInit() {
  }

  submitCreateForm(): void {
    this.m_postService.createPost(this.eventId, this.postForm.value).subscribe(result => {
      this.currentState = PostState.Read;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  submitEditForm(): void {
    this.m_postService.updatePost(this.eventId, this.postIdToUpdate, this.postForm.value).subscribe(result => {
      this.currentState = PostState.Read;
      this.postIdToUpdate = undefined;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  deletePost(postId: number): void {
    this.m_postService.deletePost(this.eventId, postId).subscribe(result => {
      this.updated.emit(undefined);
    }, error => {

    });
  }

  reloadComments(): void {
    this.updated.emit(undefined);
  }

  patchForm(post: Post): void {
    this.postForm.patchValue({
      title: post.title,
      content: post.content
    });
  }

}
