import ToDoForm from './ToDoForm.vue'

describe('<ToDoForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ToDoForm)
  })
})