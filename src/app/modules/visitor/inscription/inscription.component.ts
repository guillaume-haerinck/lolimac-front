import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      pseudo: ['', Validators.required], // former du nom et du prénom
      phone: ['xxxx', Validators.required], // TODO pas obligatoire
      mail: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pwd: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      photo_url: ['', Validators.required],
      year_promotion: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  sendForm(): void {
    
  }
}
