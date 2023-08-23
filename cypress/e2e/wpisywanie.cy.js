/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartosci w pole", () => {
        cy.visit('/')
        cy.get("#search_query_top").type("Przykladowy produkt{backspace}", {delay: 500})

    })

    it("Czyszczenie wartosci z pola input", () =>{
        cy.visit('/')
        cy.get("#search_query_top").type("Przykladowy produkt{backspace}", {delay: 500})
        cy.get("#search_query_top").focus().clear();
    })
})