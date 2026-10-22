# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/flakyRetryExamples.spec.ts >> Flaky retry examples >> passes after one simulated flaky attempt
- Location: src/tests/flakyRetryExamples.spec.ts:10:9

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test';
  2  | 
  3  | test.describe('Flaky retry examples', () => {
  4  |     test.describe.configure({retries: 1});
  5  | 
  6  |     test('passes a stable dummy check', async () => {
  7  |         expect('ready').toBe('ready');
  8  |     });
  9  | 
  10 |     test('passes after one simulated flaky attempt', async () => {
> 11 |         expect(test.info().retry).toBeGreaterThan(0);
     |                                   ^ Error: expect(received).toBeGreaterThan(expected)
  12 |     });
  13 | 
  14 |     test.describe('Nested retry checks', () => {
  15 |         test('passes a nested check', async () => {
  16 |             expect(6 / 2).toBe(3);
  17 |         });
  18 | 
  19 |         test.skip('skips a nested retry example', async () => {
  20 |             expect('not run').toBe('run');
  21 |         });
  22 |     });
  23 | });
```