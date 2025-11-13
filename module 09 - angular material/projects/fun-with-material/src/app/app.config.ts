import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => setupIcons())
  ]
};

function setupIcons() {
  const iconRegistry = inject(MatIconRegistry);
  const santizer = inject(DomSanitizer);

  iconRegistry.setDefaultFontSetClass('material-symbols-rounded');
  iconRegistry.registerFontClassAlias('icons', 'material-icons-sharp');

  const clean = santizer.bypassSecurityTrustResourceUrl(`./icons/customer.svg`);
  iconRegistry.addSvgIcon('customer', clean);

}