import { test as base, chromium } from "@playwright/test";

export type ChromeExtensionOptions = {
  chromeExtensions: {
    paths: Array<string>;
    userDataDir?: string;
  };
};

export const test = base.extend<ChromeExtensionOptions>({
  chromeExtensions: [{ paths: [] }, { option: true }],
  context: [
    async ({ chromeExtensions }, use) => {
      const { paths, userDataDir = "../Myextensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.23.2_0" } = chromeExtensions;
      const launchOptions = {
        headless: false,
        args:
          paths.length === 0
            ? []
            : [
                `--disable-extensions-except=${paths.join(",")}`,
                ...paths.map((path) => `--load-extension=${path}`),
              ],
      };
      const context = await chromium.launchPersistentContext(
        userDataDir,
        launchOptions
      );
      await use(context);
      await context.close();
    },
    { scope: "test", timeout: 2_500 },
  ],
});