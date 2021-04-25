import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'education', component: EducationComponent},
  { path: 'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
