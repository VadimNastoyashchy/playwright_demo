import {test} from '@playwright/test';
import {HomePage} from "../pom/HomePage";
import {Header} from "../pom/Header";
import {Footer} from "../pom/Footer";

test.describe('Home page tests', () => {
    test('Smoke - Home page (UI, body, header, footer', async ({page}) => {
        const homePage = new HomePage(page);
        const header = new Header(page);
        const footer = new Footer(page);

        await homePage.visit();
        await homePage.checkPageUrl();
        await header.checkContainer();
        await footer.checkContainer();
    });
});

