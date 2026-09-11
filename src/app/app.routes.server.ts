import { RenderMode, ServerRoute } from '@angular/ssr';
import { caseStudySlugs } from './content/case-studies/case-studies.data';

export const serverRoutes: ServerRoute[] = [
  { path: 'admin/messages', renderMode: RenderMode.Client },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return caseStudySlugs.map((slug) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
