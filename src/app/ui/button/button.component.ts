import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title = 'Подобрать программу';
  @Input() size: 's' | 'm' = 's';
  @Input() type: 'grey' | 'green' | 'ghost' = 'green';

  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit();
  }
}
