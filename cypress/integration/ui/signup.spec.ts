// cypress/integration/ui/signup.spec.ts

import SignupPage from '../../support/pages/SignupPage';

describe('Signup Functionality', () => {
    it('should sign up with valid details', () => {
        SignupPage.visit();
        SignupPage.fillEmail('newuser@example.com');
        SignupPage.fillName('newuser');
        SignupPage.submit();
        cy.url().should('include', '/signup');
    });
});
