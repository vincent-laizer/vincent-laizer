import { Injectable } from '@angular/core';
import { EducationBackground } from '../interface/education-background';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  data: any;

  constructor() { }

  getEducation(): EducationBackground{
    this.data = [
                  [
                    {'year':'2022 - Present','position':'Software Engineering','place':'University of Dodoma, UDOM','description':'There are many Engineering fields, trust me, there\'s non you\'ll enjoy compared to Software Engineering.'},
                    {'year':'2018','position':'Physics Chemistry Mathematics, PCM','place':'Kisimiri Secondary School','description':'Science runs the world, studying it from the leading school in advanced education in Tanzania makes the fact part of your life'},
                    {'year':'2014','position':'','place':'AHMES Secondary School','description':'A good structure needs a good foundation, I\'ll would never have chosen any other school for secondary education.'},

                  ],
                  [
                    {'year':'2023 - Present','position':'Application Developer','place':'SchulBank e.V','description':'Developing applications that facilitate the operations of an organisation that helps my fellow students in my home country study comfortably through provision of scholarships.\n https://www.schulbank.com/en/ \nDeveloping applications that facilitate the operations of an organisation that helps my fellow students in my home country study comfortably through provision of scholarships.'},
                  ]
    ];
    return this.data;

  }


}
