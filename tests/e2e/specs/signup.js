/// <reference types="Cypress" />
import { messages as veeEn } from 'vee-validate/dist/locale/en'
import { AxiosResponse } from 'axios'

describe('Sign up views', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  afterEach(() => {
  })

  it('autofocus to email', () => {
    cy.focused().should('have.attr', 'data-cy', 'email-input')
  })

  it('have login link', () => {
    cy.get('[data-cy="login-link"]')
      .should('have.attr', 'href', '/login')
  })

  it('all field required', () => {
    cy.get('[data-cy="submit-btn"]')
      .trigger('click')

    cy.contains(veeEn.required('email'))
    cy.contains(veeEn.required('username'))
    cy.contains(veeEn.required('password'))
    cy.contains(veeEn.required('name'))
  })

  it('username and password length constraint', () => {
    cy.get('[data-cy="username-input"]')
      .type('x')
    cy.get('[data-cy="password-input"]')
      .type('x')

    const params = [5, 32]

    cy.contains(veeEn.length('username', params))
    cy.contains(veeEn.length('password', params))
  })

  it('should registered', async () => {
    // cy.resetDb()
    cy.server()
    cy.route({
      method: 'POST',
      url: '/register',
      response: [

      ]
    })

    cy.route({
      method: 'GET',
      url: '/user-availibility*',
      response: [

      ]
    })

    cy.route({
      method: 'GET',
      url: '/',
      response: [

      ]
    })

    cy.get('[data-cy="email-input"]')
      .type(Cypress.env('email'))
    cy.get('[data-cy="username-input"]')
      .type(Cypress.env('username'))
    cy.get('[data-cy="password-input"]')
      .type('tester')
    cy.get('[data-cy="name-input"]')
      .type('tester')

    cy.get('[data-cy="submit-btn"]').click()
    cy.location('pathname').should('eq', '/')
  })
})
