import {expect, Locator, Page} from '@playwright/test';

export class BasePage {
    private readonly page: Page;
    protected CONTAINER: string;
    protected PAGE_NAME: string;
    protected PAGE_URL: string;

    constructor(page: Page, container: string, page_name: string, page_url?: string) {
        this.page = page;
        this.CONTAINER = container;
        this.PAGE_NAME = page_name;
        this.PAGE_URL = page_url;
    }

    public async visit(): Promise<this> {
        await this.page.goto(this.PAGE_URL);

        return this;
    }

    public async checkPageUrl(): Promise<this> {
        await expect(this.page).toHaveURL(this.PAGE_URL);

        return this;
    }

    public async checkContainer(): Promise<this>{
        await expect(this.page.locator(this.CONTAINER)).toBeVisible()

        return this;
    }
}