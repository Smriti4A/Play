import { test, expect, chromium } from '@playwright/test';
import {common, page } from "./SetupMeta.spec.ts";

/*const extensionPath = path.join(__dirname, '../Myextensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.23.2_0') // make sure this is correct

const test = base.extend({
  context: async ({ browserName }, use) => {
    const browserTypes = {chromium}
    const launchOptions = {
      headless: false,
      args: [
        `--disable-extensions-except=${extensionPath}`   ],
      viewport: {
        width: 1280, height: 1024
      }
    }
    const context = await browserTypes[browserName].launchPersistentContext(
      '',
      launchOptions
    )
    await use(context)
    await context.close();
  }
})*/

/*test('Setup page', async ( {context, page}) => {
  await page.goto('chrome://extensions/?id=nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#unlock');
  (<any>context.background_pages[1]).click("text=Get Started");
  //await page.click("text=Get Started");
  await page.screenshot({ path: 'screenshot.png'});
});
*/

test('go to the demo site', async () => {  // Resusing setup of metamask from the SetupMeta.spec.ts file
    await common.BaseTest(page);
    const page= await context(newPage);
    await page.goto('https://brandextender.io/demo/');
    await page.waitForTimeout(3000);
    page.bringToFront();
    await page.getByRole('button', { name: 'Connect Wallet' }).click();
    await page.waitForLoadState();
    await page.getByText('MetaMask').click();
    // Get all popups when they open
    page.on('popup', async popup => {
    await newPage.waitForLoadState();
    console.log(await newPage.title());
  }) // This currently is not opening the metamask popup 
    
    await page.waitForTimeout(300000)
  });
