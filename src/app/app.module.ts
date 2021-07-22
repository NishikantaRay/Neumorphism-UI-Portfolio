import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactusPageComponent } from './home/contactus-page/contactus-page.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { EducationComponent } from './home/education/education.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { AchievementsComponent } from './home/achievements/achievements.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ResumeComponent } from './home/resume/resume.component';
import { HobbyComponent } from './home/hobby/hobby.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ContactusPageComponent,
    AboutmeComponent,
    EducationComponent,
    WorkExperienceComponent,
    AchievementsComponent,
    ProjectsComponent,
    ResumeComponent,
    HobbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
