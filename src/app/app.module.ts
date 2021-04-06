import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { BackendService } from './backend.service';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
    },
  {
  path: 'skill',
  component: SkillComponent
  },
  {
  path: 'contacts',
  component: ContactsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
    },
  {
  path: '**',
  component: PageNotFoundComponent
  }
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillComponent,
    ContactsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
