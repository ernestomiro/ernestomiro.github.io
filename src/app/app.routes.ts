import { Routes } from '@angular/router';
import { methodologyRoutePath } from './content/methodology/methodology.data';
import { PortfolioHomePage } from './pages/portfolio-home/portfolio-home';

const loadCaseStudyPage = () =>
  import('./pages/case-study/case-study').then(({ CaseStudyPage }) => CaseStudyPage);

const loadMethodologyPage = () =>
  import('./pages/methodology/methodology-page').then(
    ({ MethodologyPage }) => MethodologyPage,
  );

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioHomePage,
  },
  {
    path: methodologyRoutePath,
    loadComponent: loadMethodologyPage,
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
