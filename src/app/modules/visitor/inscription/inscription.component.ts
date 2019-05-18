import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordMatch } from 'app/shared/validators/password-match';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  bInscriptionDone = false;

  constructor(private m_formBuilder: FormBuilder,
    private m_userService: UserService,
    private m_router: Router) {
    this.inscriptionForm = this.m_formBuilder.group({
      identity: this.m_formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        pseudo: '',
        year_promotion: ['', Validators.required]
      }),
      contact: this.m_formBuilder.group({
        phone: '',
        mail: ['', Validators.compose([
          Validators.required,
          Validators.email
        ])],
        photo_url: ''
      }),
      validation: this.m_formBuilder.group({
        pwd: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
        confirm_pwd: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])]
      }, {
        validators: PasswordMatch('pwd','confirm_pwd')
      })
    });
  }

  ngOnInit() {}

  sendForm(): void {
    const form = Object.assign({}, this.inscriptionForm.value.identity, this.inscriptionForm.value.contact, this.inscriptionForm.value.validation);
    delete form.confirm_pwd;
    this.m_userService.create(form).subscribe(response => {
      this.bInscriptionDone = true;

      setTimeout(() => {
        this.m_router.navigate(['/visiteur/login]']);
      }, 2500);
    }, (error: HttpErrorResponse) => {
    });
  }
}
