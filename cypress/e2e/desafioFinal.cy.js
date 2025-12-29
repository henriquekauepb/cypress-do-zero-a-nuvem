describe('Modulo 13', () => {

    it('Encontra o gato', () => {

        cy.visit('../src/index.html')

        cy.get('#cat')
          .invoke('show')
          .should('be.visible')
          .and('contain', '🐈')

        cy.get('#title')
          .invoke('text', 'CAT TAT')

        cy.get('#subtitle')
          .invoke('text', 'Eu amo Gatos!!')
    })
})