import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './components/magazines/issue6/issue6.component';

const routes: Routes = [
  { path: '**', redirectTo: 'issue#6' },
  {
    path: 'issue#6',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover_issue_6.png',
      footerText: 'or in',
      mainColor: '#FFFFFF',
      color: '#e468ac',
    },
  },
  {
    path: 'issue#5',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover_issue_5.png',
      footerText: 'or in',
      mainColor: '#00c2b7',
    },
  },
  {
    path: 'issue#4',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover_issue_4.png',
      footerText: 'If you are lucky, you may get the last pieces in ',
      mainColor: '#fa6018',
    },
  },
  {
    path: 'issue#3',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover_issue_3.png',
      footerText: 'or in',
      mainColor: '#ffbe00',
    },
  },
  {
    path: 'issue#2',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover2017.png',
      footerText: 'or in',
      mainColor: '#1d3fbb',
    },
  },
  {
    path: 'issue#1',
    component: IssueComponent,
    data: {
      imageUrl: 'backstagetalks_cover2016_n.png',
      footerText: 'If you are lucky, you may get the last pieces in',
      mainColor: '#df0f1f',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
