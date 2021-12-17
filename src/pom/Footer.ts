import {BasePage} from "./base/BasePage";
import {Page} from "@playwright/test";

export class Footer extends BasePage {

    constructor(page: Page) {
        super(page, '#footer', 'Footer')
    }
}