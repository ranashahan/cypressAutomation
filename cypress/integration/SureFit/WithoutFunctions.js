
describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://shop.mysurefit.com/')
    })

    it('displays two todo items by default', () => {
        cy.get('.tec_homepage_btn_box a').should('have.length', 3)
        cy.get('.tec_homepage_btn_box a').first().should('have.text', 'Women')
        cy.get('.tec_homepage_btn_box a').last().should('have.text', 'Women+')
    })

    it('WomenButtonExists', () => {
        cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)')
            .first().should('have.text', 'Women')
    })
    it('MenButtonExists', () => {
        cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(2)')
            .first().should('have.text', 'Men')
    })
    it('WomenPlusButtonExists', () => {
        cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(3)')
            .first().should('have.text', 'Women+')
    })
})