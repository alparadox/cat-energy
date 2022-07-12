import {Component, Inject, Input} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-energy';

  necessityCards: any = [
    {
      titleButton: 'каталог slim',
      titleCard: 'похудение',
      descriptionCard: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
      path: './assets/images/cat-slim.svg'
    },
    {
      titleButton: 'каталог pro',
      titleCard: 'набор массы',
      descriptionCard: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
      path: './assets/images/cat-pro.svg'
    }
  ];

  parametr1 = 30;
  parametr2 = 15;
  result = 'вес';

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) {}

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

  onClickPopUp(): void {
    this.dialogService
    .open('This is a plain string dialog', {label: 'Heading', size: 'm'})
    .subscribe();
  }

}
