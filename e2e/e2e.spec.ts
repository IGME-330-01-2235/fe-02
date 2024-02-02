// @ts-check
import { test, expect } from '@playwright/test';

test('application flow', async ({ page }) => {
  // navigate
  await page.goto('http://localhost:5173')

  // search for a book by title
  await page.getByTestId('title-input').fill('Three Body Problem')
  await page.getByTestId('search-button').click()

  // hide old elements
  await expect(page.getByTestId('title-input')).not.toBeVisible()
  await expect(page.getByTestId('author-input')).not.toBeVisible()
  await expect(page.getByTestId('search-button')).not.toBeVisible()

  // show new elements
  await expect(page.getByTestId('reset-button')).toBeVisible()
  await expect(page.getByTestId('book-list')).toBeVisible()
  await expect(page.getByText('The three-body problem').first()).toBeVisible()
  await expect(page.getByText('Cixin Liu').first()).toBeVisible()

  // return to search
  await page.getByTestId('reset-button').click()
  await page.getByTestId('title-input').clear()
  await page.getByTestId('author-input').fill('Crichton')
  await page.getByTestId('search-button').click()

  // hide old elements
  await expect(page.getByTestId('title-input')).not.toBeVisible()
  await expect(page.getByTestId('author-input')).not.toBeVisible()
  await expect(page.getByTestId('search-button')).not.toBeVisible()

  // show new elements
  await expect(page.getByTestId('reset-button')).toBeVisible()
  await expect(page.getByTestId('book-list')).toBeVisible()
  await expect(page.getByText('Jurassic Park').first()).toBeVisible()
  await expect(page.getByText('Michael Crichton').first()).toBeVisible()
});
