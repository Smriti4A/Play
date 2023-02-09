// fixtures.ts
import { test as base, expect, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';

export const Mytest = base.extend({
  context: BrowserContext;
  extensionId: string;

  context: async ({page}, use) => {
    const pathToExtension = path.join(__dirname, '../Myextensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.23.2_0/');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    /*
    // for manifest v2:
    let [background] = context.backgroundPages()
    if (!background)
      background = await context.waitForEvent('backgroundpage')
    */

    // for manifest v3:
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});
export const setupmetmask = Mytest.expect;