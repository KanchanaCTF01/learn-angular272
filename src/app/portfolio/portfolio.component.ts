import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios : Portfolio [];  
  constructor(private backendService: BackendService) {
        
   }

  ngOnInit(): void {
      this.portfolios = this.backendService.getPortfolios();
  }

}
