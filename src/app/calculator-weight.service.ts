import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorWeightService {

  result = 'вес';

  constructor() { }

  calcWeight(parameter1: number, parameter2: number) {
    let weight = ((+parameter1 / 0.762) - +parameter2) / 0.9156 - +parameter2;
    return weight;
  }

  showResultWeight(parameter1: number, parameter2: number) {
    let count = this.calcWeight(parameter1, parameter2);

    if(count >= 9 && count <= 30) {
      this.result = 'Вес вашего питомца в пределах нормы';
    } else if(count < 9) {
      this.result = 'У вашего питомца недостаток веса';
    } else if(count > 30 && count < 42) {
      this.result = 'У вашего питомца избыточный вес';
    } else if(count >= 42 ) {
      this.result = 'У вашего питомца ожирение. Рекомендуем обратиться к специалисту';
    }

    return this.result;
  }

}
