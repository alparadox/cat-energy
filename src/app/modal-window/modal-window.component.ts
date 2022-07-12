import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  isCalculated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calcPet() {
    // рассчет жирности
    if (!this.isCalculated) {
      this.isCalculated = !this.isCalculated;
    }

  }
}
