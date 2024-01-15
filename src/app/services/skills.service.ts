import { Injectable } from '@angular/core';
import { LanguageInfo } from '../interface/language-info';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  data: any;

  constructor() { }

  getSkills(): LanguageInfo {
    this.data = [
              [
                {'language':'C++','percent':75},
                {'language':'Python','percent':80},
                {'language':'Java','percent':70},
                {'language':'Android','percent':70},
                {'language':'BlockChain','percent':30},
                {'language':'JavaScript','percent':66},
                {'language':'Angular','percent':25},
                {'language':'ReactJS','percent':30},
                {'language':'.NET','percent':20},
                {'language':'PHP','percent':80},
                {'language':'HTML + CSS','percent':100}
              ],
              [
                {'language':'MySQL DB','percent':86},
                {'language':'Data Structure and Algorithm','percent':79},
                {'language':'Git/GitHub','percent':70},
                {'language':'Object Oriented System Design','percent':48},
                {'language':'UI/UX Design','percent':34},
                {'language':'Content Creation','percent':45},
                {'language':'Technical Instructing','percent':79},
                {'language':'Project Managment','percent':30},
                {'language':'Creative & Critical Thinking','percent':89},
              ]

    ];
            
    // skills[0] => normal
    // skills[1] => extra


    return this.data;

    
  }

}
