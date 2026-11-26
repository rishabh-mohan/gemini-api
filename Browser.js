import { chromium } from 'playwright';
import { CLIQuery } from './CLIQuery.js';
var responses = 0;

export async function openVertexAI() {
    const browserContext = (await chromium.launchPersistentContext("./browserData", { headless: false }));
    const que = new CLIQuery();
    const startUrl = 'https://accounts.google.com/AccountChooser?continue=https://vertexaisearch.cloud.google.com/us/home/cid/3d214ebb-d244-423a-a021-61b49b8b5f09?hl=en_US';
    const page = browserContext.pages()[0];
    await page.goto(startUrl);
    que.answer("Please log into VertexAI on the opened browser.");
    await page.waitForURL((url) => url.hostname === 'vertexaisearch.cloud.google.com', { timeout: 0 });
    que.answer("Successfully logged in.");
    return { page };
}

//get query in future from CLI.js
export async function askVertexAI(page, query) {
    const coveringBanner = await page.getByRole('dialog', { name: 'Welcome to Gemini Enterprise!' });
    if (await coveringBanner.count() > 0) {
        await page.getByRole('button', { name: 'Get Started' }).click();
    }
    const startMsg = await page.getByRole('textbox', { name: 'Ask Gemini Enterprise' });
    if (await startMsg.count() > 0) {
        await startMsg.fill(query);
    } else {
        await page.getByRole("textbox", { name: 'Ask a follow-up' }).fill(query);
    }
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    
    var needToStall = await page.locator('#ucs-live-announcer-0:text-is("Response complete")');
    await needToStall.waitFor({ state:'detached' });
    
    var complete = await page.locator('#ucs-live-announcer-0:text-is("Response complete")');
    await complete.waitFor({ timeout: 300000 });
    const msgs = page.locator('.markdown-document');
    return await msgs.last().innerText();
}
