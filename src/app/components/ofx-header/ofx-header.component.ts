import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ofx-header',
  templateUrl: './ofx-header.component.html',
  styleUrls: ['./ofx-header.component.scss'],
})
export class OfxHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
