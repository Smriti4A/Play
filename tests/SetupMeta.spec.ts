import { test, expect, chromium } from '@playwright/test';
import path from 'path';
module.exports={
  BaseTest async function (page) {
    
  
const extensionPath = path.join(__dirname, '../Myextensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.23.2_0') // make sure this is correct

await test.step('Start metamask', async ()=> {
      const context= await chromium.launchPersistentContext("../Myextensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.23.2_0", { headless: false, args: [
    `--disable-extensions-except=${extensionPath}`   ],viewport: {
      width: 1280, height: 1024
    } });
  const page = await context.waitForEvent("page");
  console.log(await page.title());
  await page.click("text=Get Started");
  await page.click("text=I Agree");
  await page.click("text=Import wallet");
  await page.getByTestId('import-srp__srp-word-0').fill('attend');
  await page.getByTestId('import-srp__srp-word-1').fill('kidney');
  await page.getByTestId('import-srp__srp-word-2').fill('outside');
  await page.getByTestId('import-srp__srp-word-3').fill('deal');
  await page.getByTestId('import-srp__srp-word-4').fill('blue');
  await page.getByTestId('import-srp__srp-word-5').fill('time');
  await page.getByTestId('import-srp__srp-word-6').fill('bachelor');
  await page.getByTestId('import-srp__srp-word-7').fill('into');
  await page.getByTestId('import-srp__srp-word-8').fill('snake');
  await page.getByTestId('import-srp__srp-word-9').fill('give');
  await page.getByTestId('import-srp__srp-word-10').fill('sibling');
  await page.getByTestId('import-srp__srp-word-11').fill('gaze');
  await page.getByRole('textbox',{ name: 'New Password'}).fill('Test@1234');
  await page.getByRole('textbox',{ name: 'Confirm Password'}).fill('Test@1234');
  await page.locator('input.check-box.far.fa-square').click();
  await page.getByRole('button',{ name: 'Import'}).click()
 await page.getByRole('button',{ name: 'All Done'}).click();*/
 await page.getByRole('textbox',{name: 'Password'}).fill('Test@1234')
 await page.getByRole('button',{name :'Unlock'}).click();
 await page.getByRole('button',{name :'Next'}).click();
 await page.getByRole('button',{name :'Remind me later'}).click();
 //page.on('dialog', dialog => dialog.accept());
 //await page.getByRole('button',{name: 'Restore'}).click();
 await page.getByTestId('network-droppo').click();
 page.getByText('Show/hide').click();
 await page.locator('#app-content > div > div.main-container-wrapper > div > div.settings-page__content > div.settings-page__content__modules > div.settings-page__body > div:nth-child(8) > div:nth-child(2) > div').click();
 await page.getByTestId('network-display').click();
 await page.getByTestId('goerli-network-item').click();
 await page.getByTestId('app-header-logo').click();
 //await page.locator('//*[@id="search-settings"]').type('Goerli');
 //await page.locator('//*[@id="menu-section_/settings/networks#networks-goerli"]').click();
//await page.getByText('Goerli test network').click();
//await page.getByRole('button','Add a Network')*/
 await page.waitForLoadState();
  });

/*test('load site', async()=>{  // This test is written in the other file.
 pagePromise = page.context().waitForEvent('page', p => p.url() =='https://brandextender.io/demo/');
 await pagePromise.goto('https://brandextender.io/demo/');
    await pagePromise.waitForTimeout(3000);
    page.bringToFront();
    await page.getByRole('button', { name: 'Connect Wallet' }).click();
    await page.waitForLoadState();
    await page.getByText('MetaMask').click();
    // Get all popups when they open
    page.on('popup', async popup => {
    await newPage.waitForLoadState();
    console.log(await newPage.title());
  }) 
});*/

}
}
