import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorWeightService {

  parametr1 = 30;
  parametr2 = 15;
  result = 'вес';

  constructor() { }

  calcWeight() {
    let weight = ((this.parametr1 / 0.762)-this.parametr2) / 0.9156 - this.parametr2;
    return weight;
  }

  showResultWeight() {
    let count = this.calcWeight();

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
