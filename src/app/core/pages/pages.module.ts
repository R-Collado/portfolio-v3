import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkComponent } from './work/work.component';
import { ShelfComponent } from './shelf/shelf.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ArticleDetailComponent } from './shelf/article-detail/article-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    ShelfComponent,
    ResumeComponent,
    SkillsComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
