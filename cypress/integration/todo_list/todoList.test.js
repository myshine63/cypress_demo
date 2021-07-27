describe('测试test', () => {
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        cy.get('.action-email')
            .type('simpsonhe@tencent.com')
            .should('have.value','simpsonhe@tencent.com')
    })
})