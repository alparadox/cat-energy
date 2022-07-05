import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-necessity',
  templateUrl: './necessity.component.html',
  styleUrls: ['./necessity.component.scss']
})
export class NecessityComponent implements OnInit {

  @Input() titleButton = 'title';
  @Input() titleCard = 'title';
  @Input() descriptionCard = 'description';
  @Input() imagePath = './assets/images/cat-slim.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
