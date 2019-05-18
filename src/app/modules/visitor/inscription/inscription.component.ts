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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      pseudo: '',
      phone: '',
      mail: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pwd: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      confirm_pwd: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      photo_url: '',
      year_promotion: ['', Validators.required]
    }, {
      validators: PasswordMatch('pwd','confirm_pwd')
    });
  }

  ngOnInit() {
  }


  sendForm(): void {
    
  }
}
