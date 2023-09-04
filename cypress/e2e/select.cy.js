/// <reference types="cypress" />

import selectPage from "../support/page-object/selectPage"

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
        cy.visit('//index.php?id_category=3&controller=category')
        selectPage.selectAllOption();

        // cy.get("#selectProductSort").then(dropdown => {
        //     cy.wrap(dropdown).find("option").each(opcja => {
        //         cy.wrap(opcja.text())
        //     })
        // })
    })
})
document.querySelector("#block_top_menu > ul > li:nth-child(1) > a")