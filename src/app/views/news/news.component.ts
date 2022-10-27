import { Component, OnInit } from '@angular/core';
import { ENavNames } from 'src/app/enum/ENavData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = ENavNames.NEWS
  constructor() { }

  ngOnInit(): void {
  }

}
