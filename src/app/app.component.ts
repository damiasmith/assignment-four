import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds = [];
  evens = [];

  handleIncrement(i) {
    i % 2 === 0 ? this.evens.push(i) : this.odds.push(i);
  }
}
