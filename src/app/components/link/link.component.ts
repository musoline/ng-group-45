import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() name:string = "Test";
  @Input() link:string = "/test";

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{}
}
