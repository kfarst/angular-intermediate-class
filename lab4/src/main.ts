import { provide } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { App } from './components/app';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
