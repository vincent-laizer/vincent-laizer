import { Injectable } from '@angular/core';
import { Works } from '../interface/works';
import { WorkCategories } from '../interface/work-categories';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  data: any;
  constructor() { }

  getWorks(): Works{
    this.data =  [
          {link:'http://tokeochapchap.herokuapp.com/',photo:'./assets/img/work/tokeo-chapchap.png',title:'Tokeo Chapchap',description:'View NECTA exam results',type:'android'},
          {link:'https://pypi.org/project/nectaapi/',photo:'./assets/img/work/necta-api.png',title:'NECTA API',description:'Python module for scrapping NECTA results',type:'desktop'},
          {link:'https://github.com/vincent-laizer/Zero-KB-TZ',photo:'./assets/img/work/work-5.jpg',title:'Zero KB Tz',description:'A file overwritting windows virus',type:'malware'},
          {link:'https://vincent-laizer.github.io/BoomBoomBoom/',photo:'./assets/img/work/work-4.jpg',title:'BoomBoomBoom',description:'Check if you have HESLB BOOM or not',type:'web'},
          {link:'https://sdasongs.pythonanywhere.com/',photo:'./assets/img/work/sda-songs.png',title:'SDA Songs',description:'Listen to SDA music from the web',type:'web'},
          {link:'http://kingkidu.me',photo:'./assets/img/work/king-kidu.png',title:'King Kidu',description:'Portfolio for a great poet',type:'web'},
          {link:'ttps://tha.or.tz/',photo:'./assets/img/work/tha-logo.png',title:'THA-SF Website',description:'An NGO that fights drug addiction and supports youth',type:'web'},
          
      ];

    return this.data;
  }

  getCategory(): WorkCategories{
    this.data = [
      {sign:'web',full:'Web Apps'},
      {sign:'malware',full:'Malware'},
      {sign:'desktop',full:'Desktop Application'},
      {sign: 'content',full:'Digital Content'},
      {sign:'android',full:'Android Application'}
    ];

    return this.data;
  }
}
