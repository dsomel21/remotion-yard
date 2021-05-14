const puppeteer = require('puppeteer');
const { getLastestFileCreated, getContentFromFile } = require('./getFiles');
const path = require('path');

async function openVidyardWebsite(browser) {
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://secure.vidyard.com/user/sign_in/');
  return page;
}

async function signIntoVidyard(page) {
  const navigationPromise = page.waitForNavigation();
  await page.setDefaultNavigationTimeout(100);

  /* Input Email */
  await page.waitForSelector('input[type="email"]');
  await page.type('input[type="email"]', process.env.VIDYARD_EMAIL);

  /* Input Password */
  await page.waitForSelector('input[type="password"]', { visible: true });
  await page.type('input[type="password"]', process.env.VIDYARD_PASSWORD);

  /* Click "Sign In" */
  await page.waitForSelector('#sign-in', { visible: true });
  await page.click('#sign-in');
  await navigationPromise;
}

/*
 * @params: NA
 * @desc: It will get your LAST rendered video and upload that to your Vidyard account
 * @return: Void
 */
async function uploadLatestVideo(page) {
  const tmpPath = path.resolve(__dirname, '..', '..', 'tmp');

  const videoPath = getLastestFileCreated('mp4', tmpPath);
  // const content = JSON.parse(
  //   getContentFromFile(getLastestFileCreated('json', tmpPath))
  // );
  console.log('----------------------------------');
  console.log(videoPath);
  console.log('----------------------------------');

  await page.waitForSelector('.actionbar-base-right button', {
    visible: false,
  });
  await page.click('.actionbar-base-right button');
  console.log('----------------------------------');
  await page.click('[data-testid="new-upload"]');
}

(async function connectToVidyard() {
  const browser = await puppeteer.launch({ headless: false });

  const page = await openVidyardWebsite(browser);
  await signIntoVidyard(page);
  await uploadLatestVideo(page);
})();
