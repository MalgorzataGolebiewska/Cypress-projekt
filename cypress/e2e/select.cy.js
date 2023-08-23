/// <reference types="cypress" />

describe("E2E - Akcja wybrania opcji select", () => {
    it("Wybieranie opcji", () => {
        cy.visit("//index.php?id_category=3&controller=category")

        //wybieranie po nazwie
        cy.get("#selectProductSort").select("In stock")

        //wybieranie po value
        cy.get("#selectProductSort").select("price:asc")

        //wybieranie po indeksie
        cy.get("#selectProductSort").select(7);
    })

    it.only("Wybieranie wszystkich opcji", () => {
        cy.visit('/')
        cy.get('[src="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()

        cy.get("#selectProductSort").then(dropdown => {
            cy.wrap(dropdown).find("option").each(opcja => {
                cy.wrap(dropdown).select(opcja.text())
            })
        })
    })
})
document.querySelector("#block_top_menu > ul > li:nth-child(1) > a")