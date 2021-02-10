// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * All documentation stuff
 */

declare const require: {
  /**
   * All documentation stuff
   */
  context(path: string, deep?: boolean, filter?: RegExp): {
    /**
     * All documentation stuff
     */
    keys(): string[];
    <T>(id: string): T;
  };
};

/**
 * All documentation stuff
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

/**
 * All documentation stuff
 */
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
