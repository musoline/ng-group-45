import { Component, OnInit } from '@angular/core';
import { ENavNames } from 'src/app/enum/ENavData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = ENavNames.ABOUT
  isAbout:boolean = false; 

  isClass:boolean = false;


  aboutClass:string = "blue";

  aboutText = "This About Text";

  users:User[] = users;
  constructor() { }

  ngOnInit(): void {
  }

  toggleText(){
    this.isClass = !this.isClass;
  }

  test(dat:string){
    console.log(`mouse${dat}`)
  }

}


export interface User {
  firstName:string,
  age:number,
  pos:string,
  avatar:ImageLoaderConfig
}

export interface ImageLoaderConfig {
  src: string
}

const users:User[] = [
  {firstName:"გიორგი",age:26,pos:"teacher",avatar:{src:"./assets/avatar1"}},
  {firstName:"დათო",age:26,pos:"teacher",avatar:{src:"./assets/avatar2"}},
  {firstName:"ირაკლი",age:26,pos:"teacher",avatar:{src:"./assets/avatar3"}},
  {firstName:"ვაჟა",age:26,pos:"teacher",avatar:{src:"./assets/avatar4"}}
]