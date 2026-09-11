import { adminGuard } from './admin/admin.guard';
import { Routes } from '@angular/router';
import { aiApplicationsRoutePath } from './content/ai-applications.data';
import { contactFormRoutePath } from './content/contact-form/contact-form.data';
import { methodologyRoutePath } from './content/methodology/methodology.data';
import { PortfolioHomePage } from './pages/portfolio-home/portfolio-home';

const loadCaseStudyPage = () =>
  import('./pages/case-study/case-study').then(({ CaseStudyPage }) => CaseStudyPage);

const loadMethodologyPage = () =>
  import('./pages/methodology/methodology-page').then(
    ({ MethodologyPage }) => MethodologyPage,
  );

const loadAiApplicationsPage = () =>
  import('./pages/ai-applications/ai-applications-page').then(
    ({ AiApplicationsPage }) => AiApplicationsPage,
  );

const loadContactPage = () =>
  import('./pages/contact/contact-page').then(
    ({ ContactPage }) => ContactPage,
  );

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login-page').then(m => m.LoginPage),
  },
  {
    path: 'admin/messages',
    canActivate: [adminGuard],
    loadComponent: () => import('./pages/message-management/message-management').then(m => m.MessageManagement),
  },
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
    path: aiApplicationsRoutePath,
    loadComponent: loadAiApplicationsPage,
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
