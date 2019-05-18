import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordMatch } from 'app/shared/validators/password-match';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageUrl } from 'app/shared/validators/image-url';

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
        pseudo: ['', Validators.required],
        mail: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ])],
        year_promotion: ['', Validators.required]
      }),
      optionnel: this.m_formBuilder.group({
        phone: '',
        firstname: '',
        lastname: '',
        photo_url: ['https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png', Validators.required]
      }, {
        validators: ImageUrl('photo_url')
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
    // Prepare form
    const form = Object.assign({}, this.inscriptionForm.value.identity, this.inscriptionForm.value.contact, this.inscriptionForm.value.validation);
    delete form.confirm_pwd;
    form.phone = "00 00 00 00 00";

    // Send form
    this.m_userService.create(form).subscribe(response => {
      this.bInscriptionDone = true;

      setTimeout(() => {
        this.m_router.navigate(['/visiteur/login]']);
      }, 2500);
    }, (error: HttpErrorResponse) => {
      // TODO handles error
    });
  }
}
