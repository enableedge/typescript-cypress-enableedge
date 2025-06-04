// cypress/integration/ui/login.spec.ts

import LoginPage from '../../support/pages/LoginPage';

describe('Login Functionality', () => {
    it('should log in with valid credentials', () => {
        LoginPage.visit();
        LoginPage.fillEmail('test@example.com');
        LoginPage.fillPassword('password123');
        LoginPage.submit();
        cy.url().should('include', '/home');
    });
});
