import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : Skill [];

  constructor() {
    this.skills = [];
    this.skills.push({
      id: 1,
      name: 'JavaScript'
    });
    this.skills.push({
      id: 2,
      name: 'HTML'
    });
    this.skills.push({
      id: 3,
      name: 'MySQL'
    });
    this.skills.push({
      id: 4,
      name: 'Node.JS'
    });
    this.skills.push({
      id: 5,
      name: 'Koa'
    });
    this.skills.push({
      id: 6,
      name: 'Cloud Deployment'
    });
    this.skills.push({
      id: 7,
      name: 'Algorithm: Data Structure'
    });
  }
    
    ngOnInit() : void {
     
  }

}
