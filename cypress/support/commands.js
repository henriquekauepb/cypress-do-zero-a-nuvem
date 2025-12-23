Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    cy.get('#firstName').type('Henrique')
    cy.get('#lastName').type('Malaquias')
    cy.get('#email').type('Henrique@gmail.com')
    cy.get('#open-text-area').type('Obrigado!')

    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitFull', data => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)

    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitArgument', (data = {
    firstName: 'Padrão',
    lastName: 'Da Silva',
    email: 'padrao@gmail.com',
    text: 'Test'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)

    cy.get('button[type="submit"]').click()
})