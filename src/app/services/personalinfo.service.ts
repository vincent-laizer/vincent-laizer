import { Injectable } from '@angular/core';
import { PersonalInfo } from '../interface/personal-info';
@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

  constructor() { }

  // Don't forget the observable
  getInfo(): PersonalInfo{
    return {
      'name':'Vicent Laizer',
      'who': 'Software Engineer',
      'photo': '/assets/img/vicent.png',
      'description': 'It\'s my passion, it\'s my life. Let\'s develope software that makes the world a better place.',
      'from': 'Arusha, Tanzania',
      'live': 'Dodoma, Tanzania',
      'born': 2001,
      'gender': 'Male',
      'phone': '+255 759 640 777',
      'slogan': 'Say something unique, non-motivational and quotable'
    };
  }
}
