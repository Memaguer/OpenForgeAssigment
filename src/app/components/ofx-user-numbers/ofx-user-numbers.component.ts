import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ofx-user-numbers',
  templateUrl: './ofx-user-numbers.component.html',
  styleUrls: ['./ofx-user-numbers.component.scss'],
})
export class OfxUserNumbersComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
