import { LoginPage } from './../pages/login-page';
import { test } from '@playwright/test';

let loginPage: LoginPage

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page)
});

test('Deve logar com sucesso', async ({ page }) => {

  await loginPage.go()
  await loginPage.sigIn('qa', 'cademy')
  await loginPage.userLoggeIn()
  await loginPage.pressButonOk()
});


test('Senha incorreta', async ({page}) => {

  await loginPage.go()
  await loginPage.sigIn('qa', 'academy')
  await loginPage.toastMessage('Oops! Credenciais inválidas :(')
})


test('nome obrigatório', async ({page}) => {

  await loginPage.go()
  await loginPage.sigIn('', 'cademy')
  await loginPage.toastMessage('Informe o seu nome de usuário!')
})


test('informe a senha', async ({page}) => {
  
  await loginPage.go()
  await loginPage.sigIn('qa', '')
  await loginPage.toastMessage('Informe a sua senha secreta!')
})