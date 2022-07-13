import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() title = 'Cat Energy PRO';
  @Input() weight = 500;
  @Input() flavor = 'Курица';
  @Input() price = 1000;
  @Input() image = 'assets/images/catalog-1-desktop 1.png';

  constructor() { }

  ngOnInit(): void {
  }

}
