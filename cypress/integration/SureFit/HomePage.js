describe('SureFit', function () {
    it('VerifyHomePage', function () {
        cy.visit('https://shop.mysurefit.com/')
        cy.title().should('eq', 'Shop MySureFit Brands for the Perfect Fit! – MySureFit™')

    })

    it('displays buttons items by default', () => {
        cy.get('.tec_homepage_btn_box a').should('have.length', 3)
        cy.get('.tec_homepage_btn_box a').first().should('have.text', 'Women')
        cy.get('.tec_homepage_btn_box a').last().should('have.text', 'Women+')
      })

    it('WomenButtonExists', function () {
        //cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)')
            .first().should('have.text', 'Women')
    })
    it('MenButtonExists', function () {
        //cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(2)')
            .first().should('have.text', 'Men')
    })
    it('WomenPlusButtonExists', function () {
        //cy.visit('https://shop.mysurefit.com/')
        //    cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(1)').click()
        cy.get('#loading_screen > main > div > div.tec_homepage_cta_box > div > a:nth-child(3)')
            .first().should('have.text', 'Women+')
    })
})