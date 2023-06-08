describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('add new task', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080/');
    cy.get('#new-todo-input').clear('a');
    cy.get('#new-todo-input').type('add new task');
    cy.get('form > .btn').click();
    cy.get(':nth-child(5) > .stack-small > .btn-group > :nth-child(1)').click();
    cy.get('#todo-5').clear();
    cy.get('#todo-5').type('add new task :D');
    cy.get('.btn-group > .btn__primary').click();
    cy.get('#todo-5').check();
    /* ==== End Cypress Studio ==== */
  });
})