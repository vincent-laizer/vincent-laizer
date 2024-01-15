import { Injectable } from '@angular/core';
import { Awards } from '../interface/awards';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  data: any;

  constructor() { }

  getAwards(): Awards{
    this.data = [
          
            {'photo':'./assets/img/awards/udom-awards.jfif','title':'UDOM Awards','description':'Best Project','date':' March 21, 2022'},
            {'photo':'./assets/img/awards/yst.jpg','title':'YST','description':'Overall Second Runner','date':' August 1, 2019'},
            {'photo':'./assets/img/awards/ics.jpg','title':'AHMES Secondary School','description':'Best Student in ICS','date':'December 9, 2017'},
    ];

    return this.data;

  }
}
