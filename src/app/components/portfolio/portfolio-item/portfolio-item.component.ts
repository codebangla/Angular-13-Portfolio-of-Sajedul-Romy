import { Component, Input, OnInit } from '@angular/core';
import { PortfolioData } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
@Input() pfolio!: PortfolioData;
  constructor() { }

  ngOnInit(): void {
  }

}
