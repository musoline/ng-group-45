import { Component, OnInit } from '@angular/core';
import { ENavNames } from 'src/app/enum/ENavData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = ENavNames.ABOUT
  constructor() { }

  ngOnInit(): void {
  }

}
