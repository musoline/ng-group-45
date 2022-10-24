import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-starter';

  links = [
    {link:"/",name:"Home"},
    {link:"/about",name:"About"},
    {link:"/news",name:"News"},
    {link:"/test",name:"Test"},
  ]


}
