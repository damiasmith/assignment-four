import { Component, OnInit, Input } from '@angular/core';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: Number;

  constructor() { }

  ngOnInit() {
  }

}
