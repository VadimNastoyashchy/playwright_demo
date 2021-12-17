import {BasePage} from "./base/BasePage";
import {Page} from "@playwright/test";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page, '#index', 'HomePage', 'index.php');
    }
}