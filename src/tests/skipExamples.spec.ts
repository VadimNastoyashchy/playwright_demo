import {expect, test} from '@playwright/test';

test.describe('Skip examples', () => {
    test('runs an available example', async () => {
        expect(true).toBeTruthy();
    });

    test.skip('skips an unavailable example', async () => {
        expect('unavailable').toBe('available');
    });

    test.describe('Conditional skip examples', () => {
        test('runs a nested available example', async () => {
            expect(3 * 3).toBe(9);
        });

        test('skips using a runtime condition', async () => {
            test.skip(true, 'This dummy example is intentionally skipped');
            expect('not run').toBe('run');
        });

        test.describe('Deeper nesting', () => {
            test('runs a deeply nested example', async () => {
                expect(['example']).toHaveLength(1);
            });
        });
    });
});