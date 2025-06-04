// cypress/integration/api/user.spec.ts

describe('User  API Tests', () => {
    it('should get user details', () => {
        cy.request('GET', 'https://www.automationexercise.com/api/users')
            .its('status')
            .should('eq', 200);
    });
});
