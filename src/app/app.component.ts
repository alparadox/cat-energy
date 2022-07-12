import {Component, Inject, Injector, Input} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {ModalWindowComponent} from "./modal-window/modal-window.component";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';


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

  private readonly dialog = this.dialogService.open<string>(
    new PolymorpheusComponent(ModalWindowComponent, this.injector),
    {
      data: 237,
      dismissible: true,
    },
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}

  onClickPopUp(): void {
    this.dialog.subscribe({
      next: data => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

}
