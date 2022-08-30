import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './card.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f', { static: false }) cardholderForm: NgForm;
  submitted = false;

  cardholder = {
    name: '',
    number: '',
    // date: {
      month: '',
      year: '',
    // },
    cid: ''
  }
  currentCard: Card;
  cardCollection: Card[] = [];




  ngOnInit(): void {
    this.submitted = false;

    console.log(this.cardCollection);

  }


  onSubmit() {
    console.log(this.cardholderForm);

    this.submitted = true;
    this.SaveCardDetails();


  }
  SaveCardDetails() {

    /* extract form data form: any*/
    this.cardholder.name = this.cardholderForm.value.name;
    this.cardholder.number = this.cardholderForm.value.number;
    this.cardholder.month = this.cardholderForm.value.month
    this.cardholder.year = this.cardholderForm.value.notARealYear
    this.cardholder.cid = this.cardholderForm.value.cid;

    this.currentCard = new Card(19, this.cardholder.name, this.cardholder.number, this.cardholder.month, this.cardholder.year, this.cardholder.cid);
    this.newCard();
  }
  newCard() {
    this.cardCollection.push(this.currentCard)
    console.log(this.currentCard)
  }

}
