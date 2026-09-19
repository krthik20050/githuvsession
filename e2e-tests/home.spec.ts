import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the correct title', async ({ page }) => {
    // Check that the page title is correct
    await expect(page).toHaveTitle('Tailspin Toys - Crowdfunding your new favorite game!');
  });

  test('should display the main heading', async ({ page }) => {
    // Check that the main page heading is present
    await expect(page.getByRole('heading', { name: 'Welcome to Tailspin Toys', exact: true })).toBeVisible();
  });

  test('should display the site branding in header', async ({ page }) => {
    // Check that the site branding is present in the header (no longer an h1)
    await expect(page.getByText('Tailspin Toys').first()).toBeVisible();
  });

  test('should display the welcome message', async ({ page }) => {
    // Check that the welcome message is present using more specific locator
    await expect(page.getByText('Find your next game! And maybe even back one! Explore our collection!')).toBeVisible();
  });

  test('should display the catalog summary', async ({ page }) => {
    const summary = page.getByTestId('catalog-summary');
    await expect(summary).toBeVisible();
    await expect(summary.getByText('Total games')).toBeVisible();
    await expect(summary.getByText('Average rating')).toBeVisible();
    await expect(summary.getByTestId('catalog-summary-total-value')).toHaveText('21');
    await expect(summary.getByTestId('catalog-summary-rating-value')).toHaveText('3.9/5');
  });
});
