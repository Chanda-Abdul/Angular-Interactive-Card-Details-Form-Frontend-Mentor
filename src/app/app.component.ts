import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular interactive card details form';

  items = [];

  addNewFormItem(newFormItem: string) {
    this.items.push(newFormItem);
  }
}
