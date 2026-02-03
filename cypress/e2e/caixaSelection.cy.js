describe('Exercicios Módulo 3', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    // Exericicio

    it('marca ambos checkboxes, depois desmarca o último', () => {

        cy.get('input[type = "checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
        
    })
})