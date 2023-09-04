/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartosci w pole", () => {
        cy.visit('/')
        cy.searchPhrase("Nowy tekst", 1200);

    })

    it("Czyszczenie wartosci z pola input", () =>{
        cy.visit('/')
        cy.searchPhrase("Test", 1000)
        cy.clearPhrase();
    })
})