// cypress/support/pages/SignupPage.ts

class SignupPage {
    private emailInput = 'input[data-qa="signup-email"]';
    private nameInput = 'input[data-qa="signup-name"]';
    private signupButton = 'button[data-qa="signup-button"]';

    public visit() {
        cy.visit('/login');
    }

    public fillEmail(email: string) {
        cy.get(this.emailInput).type(email);
    }

    public fillName(password: string) {
        cy.get(this.nameInput).type(password);
    }

    public submit() {
        cy.get(this.signupButton).click();
    }
}

export default new SignupPage();
