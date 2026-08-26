import { Routes } from '@angular/router';
import { PortfolioHomePage } from './pages/portfolio-home/portfolio-home';

const loadCaseStudyPage = () =>
  import('./pages/case-study/case-study').then(({ CaseStudyPage }) => CaseStudyPage);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioHomePage,
  },
  {
    path: 'projects/:slug',
    loadComponent: loadCaseStudyPage,
  },
  {
    path: '404',
    loadComponent: loadCaseStudyPage,
  },
  {
    path: '**',
    loadComponent: loadCaseStudyPage,
  },
];
