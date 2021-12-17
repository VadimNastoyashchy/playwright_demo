import {BasePage} from "./base/BasePage";
import {Page} from "@playwright/test";

export class Header extends BasePage {

    constructor(page: Page) {
        super(page, '#header', 'Header')
    }
}