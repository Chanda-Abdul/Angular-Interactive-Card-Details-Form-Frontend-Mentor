import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from './card.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  /*
    TO DO =>
    - OPTIONAL - create date form group
    - OPTIONAL - save form values to a collection/data structure
    - Update the inputs on the form as the cardholder fills in the fields
        and see the card details update in real-time
    - OPTIONAL - when the cardholder clicks "Continue" navigate to confirmation component and back
      - See
        - hover,
        - active, and
        - focus states for interactive elements on the page
      - OPTIONAL - add logo based on card type
      - OPTIONAL - add animations
      - fix favicon
      - View the optimal layout depending on their device's screen size
          - mobile
          - tablet
          - desktop
    */


  @ViewChild('f', { static: false }) cardholderForm: NgForm;
  @Output() newFormItemEvent = new EventEmitter<string>();

  //1111222233334444
  cardholder = {
    name: '',
    number: '',
    // date: {
    month: '',
    year: '',
    // },
    cid: ''
  }
  // currentCard: Card;
  // cardCollection: Card[] = [];
  submitted = false;

  addNewFormItem(value: string) {
    this.newFormItemEvent.emit(this.cardholder.name);
  }

  ngOnInit(): void {
    this.submitted = false;
    // console.log(this.cardCollection);
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.cardholder);

    /* extract form data */
    this.cardholder.name = this.cardholderForm.value.name;
    this.cardholder.number = this.cardholderForm.value.number;
    this.cardholder.month = this.cardholderForm.value.month;
    this.cardholder.year = this.cardholderForm.value.year;
    this.cardholder.cid = this.cardholderForm.value.cid;

    console.log(this.cardholderForm.value.cardholderInfo);
    // this.SaveCardDetails();
  }
  onFormReset() {
    /* reset form */
    this.submitted = false;
    this.cardholderForm.reset();
  }

  // saveNewCardDetails() {
  //   this.currentCard = new Card(19, this.cardholder.name, this.cardholder.number, this.cardholder.month, this.cardholder.year, this.cardholder.cid);
  //   this.newCard();
  //   this.cardCollection.push(this.currentCard)
  //   console.log(this.currentCard)
  // }

}
