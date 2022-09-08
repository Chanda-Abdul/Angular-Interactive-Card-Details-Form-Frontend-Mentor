import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Card } from './card.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('f', { static: false }) cardholderForm: NgForm;
  @Output() newFormEvent: EventEmitter<any> = new EventEmitter<any>();
  submitted = false;

  /*
  Pattern Validators
  TO DO => Figure out format to add to input validators
  */
  namePattern = new RegExp("^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$");
  monthPattern = "0[1-9]|1[0-2]";
  yearPattern = "[2][2-8]";
  cidPattern = "^[0-9][0-9][0-9]";
  /* Regex for Leading Card Networks */
  cardAmexPattern = new RegExp("^[34|37][0-9]{14}$");
  cardVisaPattern = new RegExp("^4[0-9]{6,}$");
  cardMastercardPattern = new RegExp("(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}");
  cardDiscoverPattern = new RegExp("^6011-?\d{4}-?\d{4}-?\d{4}$");
  cardDinersclubPattern = new RegExp("(^30[0-5][0-9]{11}$)|(^(36|38)[0-9]{12}$)");
  cardJCBPattern = new RegExp("(^3[0-9]{15}$)|(^(2131|1800)[0-9]{11}$)");
  // cardDefaultPattern = "^[a-z0-9_-]{8,15}$";


  constructor() { }

  cardholder: Card = {
    name: '',
    number: '',
    month: '',
    year: '',
    cid: ''
  }

  cardCollection: Card[] = [];

  ngOnInit(): void {
    this.submitted = false;
  }
  addNewInfo(info: any) {
    this.newFormEvent.emit(info)
  }

  onSubmit() {
    this.submitted = true;

    /* extract form data */
    this.cardholder.name = this.cardholderForm.value.name;
    this.cardholder.number = this.cardholderForm.value.number;
    this.cardholder.month = this.cardholderForm.value.month;
    this.cardholder.year = this.cardholderForm.value.year;
    this.cardholder.cid = this.cardholderForm.value.cid;

    /* save card data */
    this.saveNewCardDetails();
    this.cardholder.name = '';
    this.cardholder.number = '';
    this.cardholder.month = '';
    this.cardholder.year = '';
    this.cardholder.cid = '';

    /* clear card header data */
    this.addNewInfo(this.cardholder)

  }

  onFormReset() {
    /* reset form */
    this.submitted = false;
    this.cardholderForm.reset();
  }

  saveNewCardDetails() {
    this.cardCollection.push(this.cardholderForm.value.cardholderInfo)
  }

}
