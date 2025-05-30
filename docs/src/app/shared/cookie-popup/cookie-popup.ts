/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';

const STORAGE_KEY = 'docs-cookies';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.html',
  styleUrls: ['./cookie-popup.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, MatAnchor],
})
export class CookiePopup {
  /** Whether the user has accepted the cookie disclaimer. */
  hasAccepted: boolean;

  constructor() {
    // Needs to be in a try/catch, because some browsers will
    // throw when using `localStorage` in private mode.
    try {
      this.hasAccepted = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      this.hasAccepted = false;
    }
  }

  /** Accepts the cookie disclaimer. */
  accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {}

    this.hasAccepted = true;
  }
}
