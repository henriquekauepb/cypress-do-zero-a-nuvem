describe('Exercicios Módulo 12', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    Cypress._.times(3, () => {
        it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

        cy.clock()
        
        const nomeLongText = Cypress._.repeat('Henrique', 3)

        cy.get('#firstName').invoke('val', nomeLongText)
        cy.get('#lastName').type('Malaquias')
        cy.get('#email').type('Henrique.com.br')
        cy.get('#open-text-area').type('Obrigado!')

        cy.contains('.button', 'Enviar').click()

        cy.get('.error').should('be.visible')

        cy.tick(3000)

        cy.get('.error').should('not.be.visible')
    })

    })

    
    it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {

            cy.get('.success')
                .should('not.be.visible')
                .invoke('show')
                .should('be.visible')
                .and('contain', 'Mensagem enviada com sucesso.')
                .invoke('hide')
                .should('not.be.visible')

            cy.get('.error')
                .should('not.be.visible')
                .invoke('show')
                .should('be.visible')
                .and('contain', 'Valide os campos obrigatórios!')
                .invoke('hide')
                .should('not.be.visible')     
    })

    it('preenche o campo da área de texto usando o comando invoke', () => {

        cy.get('#firstName')
        .invoke('val', 'Henrique')
        .should('have.value', 'Henrique')

    })
    
})