/// <reference types="cypress"/>
//Funcionalidades
describe('Login', () => {


  //cenários
  it('Login com sucesso', () => {
    
    //DADO
    //acessar tela de login
    cy.visit9('https://automationpratice.com.br/login')

    //digitar email
    cy.get('#user').type('bruno@qazando.com')
    //digitar senha
    cy.get('#password').type('123456')

    //QUANDO
    //clicar no botao de login
    cy.get('#btnLogin').click()

    //ENTÃO
    //validar que o login foi realizado
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    cy.url().should('contain', '/my-account')
    //cy.screenshot() //print

  })

  it('Login com e-mail vazio', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    
  })

  it('Login com senha vazia', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('bruno@qazando.com')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')    
  })

  it('Login com e-mail invalido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('jklshlkdhldhl')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')    
  })

  it('Login com senha invalida', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('bruno@qazando.com')
    cy.get('#password').type('123')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')     
  })

  


})