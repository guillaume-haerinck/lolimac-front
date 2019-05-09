import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  invitationForm: FormGroup;

  constructor(private m_formBuilder: FormBuilder) {
    this.invitationForm = this.m_formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      promotion: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit() {
  }

}
