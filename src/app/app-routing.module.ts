import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ResumeComponent } from './core/pages/resume/resume.component';
import { ArticleDetailComponent } from './core/pages/shelf/article-detail/article-detail.component';
import { ShelfComponent } from './core/pages/shelf/shelf.component';
import { SkillsComponent } from './core/pages/skills/skills.component';
import { WorkComponent } from './core/pages/work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'shelf', component: ShelfComponent },
  { path: 'shelf/:name', component: ArticleDetailComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
