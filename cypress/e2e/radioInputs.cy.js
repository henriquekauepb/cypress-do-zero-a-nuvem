describe('Exercicios Módulo 3', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    // Exercicio

    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"]').check('feedback')
    })

    // Exercicio Extra 1 

    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"][value="ajuda"]')
        .check()
        .should('be.checked')

        cy.get('input[type="radio"][value="elogio"]')
        .check()
        .should('be.checked')

        cy.get('input[type="radio"] [value="feedback"]')
        .check()
        .should('be.checked')


    })

    // Exercicio Extra 1 (Each and Wrap)

    it.only('marca cada tipo de atendimento', () => {

        cy.get('input[type="radio"]')
        .each(typeOfService => {
            cy.wrap(typeOfService)
            .check()
            .should('be.checked')
        })

    })
})