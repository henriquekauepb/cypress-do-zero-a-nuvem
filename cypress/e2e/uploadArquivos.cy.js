describe('Exercicios Módulo 3', () => {

    beforeEach(() => {
        cy.visit('././src/index.html')
    })

    // Exercicio
    it('seleciona um arquivo da pasta fixtures', () => {
        
        cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json')
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
        })
    
    })

    // Exercicio Extra 1

    it('seleciona um arquivo simulando um drag-and-drop', () => {

         cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
        })
    })

     // Exercicio Extra 2

     it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

        cy.fixture('example.json').as('myFixture')
        
        cy.get('#file-upload')
        .selectFile('@myFixture')
        .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        })
        
         
    })
})
