import { Component, Input, OnInit } from '@angular/core';
import { PortfolioData } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
@Input() pfolio!: PortfolioData;
  constructor() { }

  ngOnInit(): void {
  }

}
