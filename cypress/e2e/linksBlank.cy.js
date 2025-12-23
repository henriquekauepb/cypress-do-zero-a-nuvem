/// <references types = "cypress" />

describe('', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy > a')
        .should('have.attr', 'href', 'privacy.html')
        .and('have.attr', 'target', '_blank')
    })

    // Exercicio Extra 1

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy > a').invoke('removeAttr', 'target').click()
        
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    })

    // Exercicio Extra 2

    it('testa a página da política de privacidade de forma independente', () => {
        cy.visit('././src/privacy.html')

        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible') 
    })
})