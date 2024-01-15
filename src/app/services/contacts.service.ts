import { Injectable } from '@angular/core';
import { Contacts } from '../interface/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): Contacts{
    return {
      'instagram': 'https://www.instagram.com/vincent_laizer/',
      'github': 'https://github.com/vincent-laizer',
      'twitter': 'https://twitter.com/LaizerVincent',
      'linkedin': 'https://www.linkedin.com/in/vincent-laizer-7390a91a9/',
      'youtube': 'https://www.youtube.com/channel/UCuMUw-djxHqOHrvnnFGYtZA',
      'email': 'vglaizer@gmail.com',
      'phone1': '+255 759 640 777',
      'phone2': '+255 657 069 774'
    }
  }
}
