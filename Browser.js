import { chromium } from 'playwright';
import { CLIQuery } from './CLIQuery.js';

export async function openVertexAI() {
    const que = new CLIQuery();
    const startUrl = 'https://accounts.google.com/AccountChooser?continue=https://vertexaisearch.cloud.google.com/us/home/cid/3d214ebb-d244-423a-a021-61b49b8b5f09?hl=en_US';
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(startUrl);
    
    return { browser, page };
}
