import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from 'app/shared/models/post';
import { PostService } from 'app/modules/events/post.service';

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
  bCreate = false;
  bEdit = false;

  constructor(private m_postService: PostService,
    private m_formBuilder: FormBuilder) {
    this.postForm = this.m_formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitCreateForm(): void {
    this.m_postService.createPost(this.eventId, this.postForm.value).subscribe(result => {
      this.bCreate = false;
      this.updated.emit(undefined);
    }, error => {

    });
  }

  submitEditForm(postId: number): void {
    this.m_postService.updatePost(this.eventId, postId, this.postForm.value).subscribe(result => {
      this.bCreate = false;
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

}
