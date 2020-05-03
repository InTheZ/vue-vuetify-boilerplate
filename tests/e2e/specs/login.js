/// <reference types="cypress" />

describe('Login views', () => {
  describe('Component check', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    afterEach(() => {
    })

    it('have create account link', () => {
      cy.get('[data-cy="signup-link"]')
        .should('have.attr', 'href', '/signup')
    })

    it('autofocus to username', () => {
      cy.focused().should('have.attr', 'data-cy', 'username-input')
    })

    it('have create account link', () => {
      cy.get('[data-cy="signup-link"]')
        .should('have.attr', 'href', '/signup')
    })

    it('have reset password link', () => {
      cy.get('[data-cy="reset-password-link"]')
        .should('have.attr', 'href', '/reset-password')
    })

    it('password required', () => {
      cy.get('[data-cy="username-input"]')
        .type(`${Cypress.env('username')}{enter}`)
    })

    it('username required', () => {
      cy.get('[data-cy="password-input"]')
        .type(`${Cypress.env('password')}{enter}`)
    })

    it('redirect to home page', () => {
      cy.server()

      cy.route({
        method: 'POST',
        url: '/auth/login',
        response: [

        ]
      })

      cy.route({
        method: 'GET',
        url: '/auth/data',
        response: [

        ]
      })

      cy.route({
        method: 'GET',
        url: '/',
        response: [

        ]
      })

      cy.get('[data-cy="username-input"]')
        .type(`${Cypress.env('username')}{enter}`)
      cy.get('[data-cy="password-input"]')
        .type(`${Cypress.env('password')}{enter}`)
      cy.get('[data-cy="submit-btn"]').click()
      cy.location('pathname').should('eq', '/')
    })
  })
})
