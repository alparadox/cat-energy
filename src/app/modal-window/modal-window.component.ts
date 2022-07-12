import {Component, Inject, OnInit} from '@angular/core';
import {CalculatorWeightService} from "../calculator-weight.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  isCalculated: boolean = false;
  parameter1 = '';
  parameter2 = '';
  result = '';

  constructor(
    @Inject(CalculatorWeightService) public calculatorWeightService: CalculatorWeightService
  ) { }

  ngOnInit(): void {
  }

  calcPet() {
    this.result = this.calculatorWeightService.showResultWeight(+this.parameter1, +this.parameter2);
    if (!this.isCalculated) {
      this.isCalculated = !this.isCalculated;
    }

  }
}
