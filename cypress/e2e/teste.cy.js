describe('', () => {

    beforeEach('Acessar sistema da Telebras', () => {

        cy.visit('https://dev.telebras.com.br/portal-cliente-frontend-v2')
        
    })

    it.only('Texto "Campo obrigatório" é apresentado após preencher apenas o campo Usuário', () => {
        cy.get('input[type="text"]').type('myUser')
        cy.contains('button', 'Entrar').click()
        cy.contains('Campo obrigatório').should('be.visible')
    })
    
    it.only('Texto "Campo obrigatório" é apresentado após preencher apenas o campo Senha', () => {
        cy.get('input[type="password"]').type('myPassword', {log : false});
        cy.contains('button', 'Entrar').click()
        cy.contains('Campo obrigatório').should('be.visible')
    })

    

    it('Realizar login no sistema (Credenciais incorretas)', ()  => {    

        cy.get('input[type="text"]').type('myUser')
        cy.get('input[type="password"]').type('myPassword', {log : false});
        cy.contains('button', 'Entrar').click()

        cy.get('.v-card v-theme--customTheme v-card--density-default v-card--variant-elevated').should('be.visible')

    })
})