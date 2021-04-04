import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios : Portfolio [];  
  constructor() {
    this.portfolios = [];
    this.portfolios.push({
      id : 1,
      name :'Portfolio 1',
      detail : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sunt error. Eius magni facilis inventore, laboriosam fuga, tempora quo quidem itaque placeat repellendus non rem nesciunt! Debitis voluptatibus facere ex.',
    });
    this.portfolios.push({
      id : 2,
      name :'Portfolio 2',
      detail : 'Molestias repellendus blanditiis quis explicabo quaerat obcaecati temporibus nisi voluptatem libero? Animi labore doloribus placeat ad veniam velit debitis perferendis necessitatibus eligendi!',
    });
    this.portfolios.push({
      id : 3,
      name :'Portfolio 3',
      detail : 'Cupiditate delectus repudiandae ut ducimus vel autem explicabo minus, adipisci accusamus quos, obcaecati sapiente eaque illum, unde fugit perferendis ullam eius. Corporis.',
    });
    this.portfolios.push({
      id : 4,
      name :'Portfolio 4',
      detail : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    });

    
   }

  ngOnInit(): void {
  }

}
