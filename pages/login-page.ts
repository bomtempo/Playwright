import { Page,expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://login-app-qacademy.vercel.app/');
        const title = this.page.locator('.App-header p');
        await expect(title).toHaveText('Login');
    }

    async sigIn(user: string, password: string) {
        await this.page.fill('input[placeholder$=usuário]', user);
        await this.page.fill('input[placeholder^=senha]', password);
      
        await this.page.click('button >> text=Entrar')
    }

    async userLoggeIn() {
        const modalMessage1 = this.page.locator('.swal2-title')
        await expect(modalMessage1).toHaveText('Tudo certo!')         
        const modalMessage2 = this.page.locator('.swal2-html-container')     
        await expect(modalMessage2).toHaveText('Sua credenciais são validas :)')
    }
    
    async pressButonOk() {
        await this.page.click('button >> text=Ok')
    }

    async toastMessage(target: string) {
        const toastMessage = this.page.locator('div[role=status]')
        await expect(toastMessage).toHaveText(target)
    }

    async userObrigatorio(target: string) {
        const toastMessage = this.page.locator('div[role=status]')
        await expect(toastMessage).toHaveText(target)
    }
}