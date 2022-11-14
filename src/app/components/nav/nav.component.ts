import { Component,Input,OnInit } from '@angular/core';
import { ENavLink, ENavNames } from 'src/app/enum/ENavData';
import { UNavLink } from 'src/app/utils/UNavData';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  @Input() data!:string;

  title = 'app-nav';
  navList = [
    { link: UNavLink(ENavLink.HOME), name: ENavNames.HOME },
    { link: UNavLink(ENavLink.NEWS), name: ENavNames.NEWS },
    { link: UNavLink(ENavLink.ABOUT), name: ENavNames.ABOUT },
    { link: UNavLink(ENavLink.TEST), name: ENavNames.TEST },
  ];

  ngOnInit(){
    console.log("dasdasd",this.data,"asdasdas")
  }

}
