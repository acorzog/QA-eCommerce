import '@badeball/cypress-cucumber-preprocessor';
import './commands';

// Permitir que los tests continúen después de errores
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.clearLocalStorage()
});
