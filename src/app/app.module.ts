import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './components/forms/registration-form/registration-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { LinkComponent } from './components/link/link.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { TestComponent } from './views/test/test.component';
import { NewsComponent } from './views/news/news.component';
import { ENavLink } from './enum/ENavData';


const appRoutes: Routes = [
 
  { path: ENavLink.HOME, component: HomeComponent },
  { path: ENavLink.NEWS, component: NewsComponent },
  { path: ENavLink.ABOUT, component: AboutComponent },
  { path: ENavLink.TEST, component: TestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    TestComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
