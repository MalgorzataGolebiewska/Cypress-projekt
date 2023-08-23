/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Should open home page - automationpractice", () =>{
        cy.visit('/')

        //po znaczniku
        cy.get("a");

        //identyfikator
        cy.get("#search_query_top")

        //po klasie
        cy.get(".form-control")

        //Po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[placeholder="Search"]')

        //Pobranie elementów po kilku atrybutach
        cy.get('[src="http://www.automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

    })

    it.only("Lokalizatory czesc 2", () => {
        cy.visit('/')
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").eq(1)
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")

    })
})