/// <reference types="cypress" />

describe("E2E = Metoda Invoke", () =>{
    it("Invoke", () => {
        cy.visit('/')

        //Pobieranie wartosci z danego elementu
        cy.get('[title="Contact us"]').invoke("text").then(tekst => {
            cy.log(tekst)
        })

        //Uzyskanie dostepu do wartosci atrybutu
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get('[title="Contact us"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })

         //Pobieranie wartosci value
        cy.get("#search_query_top").type("Przykladowa wartosc").invoke('prop', 'checked').then(wartosc => {
            cy.log(wartosc)
        })
    })

})