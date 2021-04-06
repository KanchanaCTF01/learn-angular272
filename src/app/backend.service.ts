import { Injectable } from '@angular/core';
import { Portfolio } from './models/portfolio';
import { Skill } from './models/skill';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  portfolios: Portfolio [];
  skills: Skill [];
  constructor() {
    this.portfolios = [
      {
        id : 1,
        name :'Portfolio 1',
        detail : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sunt error. Eius magni facilis inventore, laboriosam fuga, tempora quo quidem itaque placeat repellendus non rem nesciunt! Debitis voluptatibus facere ex.',
      },
      {
        id : 2,
        name :'Portfolio 2',
        detail : 'Molestias repellendus blanditiis quis explicabo quaerat obcaecati temporibus nisi voluptatem libero? Animi labore doloribus placeat ad veniam velit debitis perferendis necessitatibus eligendi!',
      },
      {
        id : 3,
        name :'Portfolio 3',
        detail : 'Cupiditate delectus repudiandae ut ducimus vel autem explicabo minus, adipisci accusamus quos, obcaecati sapiente eaque illum, unde fugit perferendis ullam eius. Corporis.',
      },
      {
        id : 4,
        name :'Portfolio 4',
        detail : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      },
    ]; 
    this.skills = [
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'HTML'
    },
    {
      id: 3,
      name: 'MySQL'
    },
    {
      id: 4,
      name: 'Node.JS'
    },
    {
      id: 5,
      name: 'Koa'
    },
    {
      id: 6,
      name: 'Cloud Deployment'
    },
    {
      id: 7,
      name: 'Algorithm: Data Structure'
    },
  ];
        
   }
  getSkills(){
    this.skills = this.skills;
    return this.skills;
  }
  getPortfolios() {
    this.portfolios = this.portfolios;
    return this.portfolios;
  }
  
}
