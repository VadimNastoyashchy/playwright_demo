import {expect, test} from '@playwright/test';

test.describe('Nested suite examples', () => {
    test('runs a top-level example', async () => {
        expect(2 + 2).toBe(4);
    });

    test.describe('String checks', () => {
        test('checks a string value', async () => {
            expect('playwright').toContain('wright');
        });

        test.describe('Nested number checks', () => {
            test('compares two numbers', async () => {
                expect(10).toBeGreaterThan(5);
            });

            test.skip('shows a skipped nested example', async () => {
                expect('not run').toBe('run');
            });
        });
    });

    test('checks an array value', async () => {
        expect(['red', 'green', 'blue']).toContain('green');
    });
});