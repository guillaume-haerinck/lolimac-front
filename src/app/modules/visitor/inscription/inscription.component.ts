import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordMatch } from 'app/shared/validators/password-match';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;

  constructor(private m_formBuilder: FormBuilder) {
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
      })
    }, {
      //validators: PasswordMatch('pwd','confirm_pwd')
    });
  }

  ngOnInit() {
  }


  sendForm(): void {
    
  }
}
