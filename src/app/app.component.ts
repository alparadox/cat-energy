import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-energy';


  necessityCards: any = [
    {titleButton: 'каталог slim', titleCard: 'похудение', descriptionCard: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.', path: './assets/images/cat-slim.svg'},
    {titleButton: 'каталог pro', titleCard: 'набор массы', descriptionCard: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!', path: './assets/images/cat-pro.svg'}
  ];
}

