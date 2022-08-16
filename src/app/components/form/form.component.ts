import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm;
  cardholder = new Card(18, '', '', '', '', '');

  submitted: boolean;


  constructor() {
    // super();private formBuilder: FormBuilder

  }

  ngOnInit(): void {
    this.submitted = false;

    // console.log(this.submitted);
    // this.initializeForm();
    // console.log(this.cardholder);
  }

  // initializeForm(): void {
  // this.userForm = this.formBuilder.group({
  // userholderName: [],
  // userNumber: [],
  // expDate: [],
  // cvc: [],

  // }
  // )
  // }
  onSubmit() {
  //  console.log(this.userForm);
    console.log(this.cardholder.name); 
    this.submitted = true;
    
    this.SaveCardDetails(this.userForm)
  }
  SaveCardDetails(form:any){
    
    this.cardholder = new Card(19, this.cardholder.name, '', '', '', '');
    console.log(this.cardholder);
    console.log(this.cardholder.name);
  }
  newCard() {
    this.cardholder = new Card(19, '', '', '', '', '');
  }

}
