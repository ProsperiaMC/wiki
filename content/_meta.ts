import { siteConfig } from '@/config/site';
/* eslint-disable import/no-anonymous-default-export */
export default {
  index: 'Welcome to Prosperia',
  'getting-started': {
    title: 'Getting Started',
    // collapsible: false,
  },
  survival: 'Economy Survival',
  map: {
    title: 'Live Map',
    type: 'page',
    href: siteConfig.liveMapUrl,
  },
  store: {
    title: 'Store',
    type: 'page',
    href: siteConfig.liveMapUrl,
  },
  vote: {
    title: 'Vote',
  },
};
