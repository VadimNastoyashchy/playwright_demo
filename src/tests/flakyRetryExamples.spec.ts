import {expect, test} from '@playwright/test';

test.describe('Flaky retry examples', () => {
    test.describe.configure({retries: 1});

    test('passes a stable dummy check', async () => {
        expect('ready').toBe('ready');
    });

    test('passes after one simulated flaky attempt', async () => {
        expect(test.info().retry).toBeGreaterThan(0);
    });

    test.describe('Nested retry checks', () => {
        test('passes a nested check', async () => {
            expect(6 / 2).toBe(3);
        });

        test.skip('skips a nested retry example', async () => {
            expect('not run').toBe('run');
        });
    });
});