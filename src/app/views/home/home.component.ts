import { Component, OnInit } from '@angular/core';
import { ENavNames } from 'src/app/enum/ENavData';
import { User } from '../about/about.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = ENavNames.HOME
  constructor() { }

  ngOnInit(): void {
  }

}
