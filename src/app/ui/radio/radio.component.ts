import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() title = 'Похудение';
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
