import { registerPlugin } from '@capacitor/core';

import type { CapGoogleMapPlugin } from './definitions';

const CapGoogleMap = registerPlugin<CapGoogleMapPlugin>('CapGoogleMap', {
  web: () => import('./web').then(m => new m.CapGoogleMapWeb()),
});

export * from './definitions';
export { CapGoogleMap };
