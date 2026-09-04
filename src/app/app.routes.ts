import { Routes } from '@angular/router';
import { contactFormRoutePath } from './content/contact-form/contact-form.data';
import { methodologyRoutePath } from './content/methodology/methodology.data';
import { PortfolioHomePage } from './pages/portfolio-home/portfolio-home';

const loadCaseStudyPage = () =>
  import('./pages/case-study/case-study').then(({ CaseStudyPage }) => CaseStudyPage);

const loadMethodologyPage = () =>
  import('./pages/methodology/methodology-page').then(
    ({ MethodologyPage }) => MethodologyPage,
  );

const loadContactPage = () =>
  import('./pages/contact/contact-page').then(
    ({ ContactPage }) => ContactPage,
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
    path: contactFormRoutePath,
    loadComponent: loadContactPage,
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
