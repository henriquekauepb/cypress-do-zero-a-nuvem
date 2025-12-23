/// <references types = "cypress" />

describe('Exercicios Módulo 3', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    // Exercicio 1 
    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })

    // Exercicio Extra 1 
    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })

    // Exercicio Extra 2
    it('seleciona um produto (Blog) por seu índice', () => {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })
})