import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title = 'Подобрать программу';
  @Input() size: 's' | 'm' = 's';
  @Input() type: 'grey' | 'green' | 'ghost' = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
