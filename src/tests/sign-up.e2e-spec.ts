import { expect, test } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Shop');
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jhon Doe');
  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('jhondoe@example.com');
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('999999999');

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Restaurante cadastrado com sucesso!');
  await expect(toast).toBeVisible();
});

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Invalid Name');
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jhon Doe');
  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('jhondoe@example.com');
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('999999999');

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Erro ao cadastrar restaurante.');
  await expect(toast).toBeVisible();
  await expect(page.locator('body')).toContainText(
    'Erro ao cadastrar restaurante.'
  );
});

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer Login' }).click();

  expect(page.url()).toContain('/sign-in');
});
