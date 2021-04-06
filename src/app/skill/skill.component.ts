import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : Skill [];

  constructor(private backendService: BackendService) {
    
  }
    
    ngOnInit() : void {
    this.skills = this.backendService.getSkills();
     
  }

}
