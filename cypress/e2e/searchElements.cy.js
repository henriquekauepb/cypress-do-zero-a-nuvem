/// <references types = "cypress" />

describe('Exercicio Extras', () =>{

    beforeEach(()=> {
        cy.visit('././src/index.html')
    })

    // Extra 1
    it('Removendo delay dos campos de digitação', () => {

        const longText = Cypress._.repeat("Lorem Ipsum", 20)
        cy.get('#open-text-area').type(longText, { delay: 0 }) 
        
    })

    // Extra 2
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

        cy.get('#firstName').type('Henrique')
        cy.get('#lastName').type('Malaquias')
        cy.get('#email').type('Henrique.com.br')
        cy.get('#open-text-area').type('Obrigado!')

        cy.contains('.button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    // Extra 3
    it('Testando não numéricos no campo telefone', () => {

        cy.get('#phone')
          .type('Número de telefone')
          .should('have.value', '')    
          
    })

    // Extra 4
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{

        cy.get('#firstName').type('Henrique')
        cy.get('#lastName').type('Malaquias')
        cy.get('#email').type('Henrique.com.br')
        cy.get('#open-text-area').type('Obrigado!')

        cy.get('#phone-checkbox').check()

        cy.contains('.button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
    })


    // Extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

        cy.get('#firstName')
        .type('Henrique')
        .should('have.value', 'Henrique')
        .clear()
        .should('have.value', '')
        cy.get('#lastName').type('Malaquias')
        .should('have.value', 'Malaquias')
        .clear()
        .should('have.value', '')
        cy.get('#email').type('Henriquekaue@gmail.com')
        .should('have.value', 'Henriquekaue@gmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#open-text-area').type('Obrigado!')
        .should('have.value', 'Obrigado!')
        .clear()
        .should('have.value', '')

        cy.contains('button', 'Enviar').click()
    })

    //Extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{

        cy.visit('././src/index.html')

        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })


    //Extra 7
    it('envia o formulário com sucesso usando   um comando customizado', () => {

        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', () => {

        const data = {
            firstName: 'Henrique',
            lastName: 'Malaquias',
            email: 'henrique@gmail.com',
            text: 'Teste.'
        }

        cy.fillMandatoryFieldsAndSubmitFull(data)

        cy.get('.success').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', () => {

        cy.fillMandatoryFieldsAndSubmitArgument()

        cy.get('.success').should('be.visible')
    })

})