import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from '../../data/portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio_object = PORTFOLIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
