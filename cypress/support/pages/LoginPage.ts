// cypress/support/pages/LoginPage.ts

class LoginPage {
    private emailInput = 'input[data-qa="login-email"]';
    private passwordInput = 'input[data-qa="login-password"]';
    private loginButton = 'button[data-qa="login-button "]';

    public visit() {
        cy.visit('/login');
    }

    public fillEmail(email: string) {
        cy.get(this.emailInput).type(email);
    }

    public fillPassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    public submit() {
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();
