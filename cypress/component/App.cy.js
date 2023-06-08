import App from '../../src/App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
  });
  it('Check headline', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
    cy.get('h1').should('contain.text', 'To-Do List');
  });

  it('Check delete button', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
    cy.get(':nth-child(1) > .stack-small > .btn-group > .btn__danger').should('contain.text', 'Delete');
  })

  it('Add new item', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
    cy.get('#new-todo-input').type('new task');
    cy.get('form > .btn').click();
    cy.get('li').should("have.length", 5);
  })
})