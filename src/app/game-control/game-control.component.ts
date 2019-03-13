import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  i = 0;
  log = null;
  @Output()incrementingEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStarting() {
    if (this.log === null) {
      this.log = setInterval(this.increment, 1000, this);
    }
  }

  onStopping() {
    clearInterval(this.log);
    this.log = null;
  }

  increment(that) {
    that.i++;
    that.incrementingEvent.emit(that.i);
  }

}
