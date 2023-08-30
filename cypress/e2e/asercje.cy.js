/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz shopuld", () => {
        cy.visit('/')

        //Weryfikacja tekstu
        cy.get('a[title="Contact us"]').should("contain", "Contact us")
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact us"]').should("not.contain", "Sign Up")
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).not.to.contain("Sign Up")
        })

        //Weryfikacja czy znacznik mposiada klasę
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //Czy element jest widoczny
        cy.get("#search_query_top").should("be.visible")
        cy.get("#search_query_top").then(widocznosc => {
            expect(widocznosc).to.be.visible
        })

        //Weryfikacja pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 16)
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(16)
        })

        //Weryfikacja wartości css damego elementu
        cy.get("#search_query_top").should("have.css", "height", "45px")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("height", "45px")
        })

    })
})