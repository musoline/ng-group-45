import { Component, OnInit } from '@angular/core';
import { ENavNames } from 'src/app/enum/ENavData';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = ENavNames.TEST
  constructor() { }

  ngOnInit(): void {
  }

}
