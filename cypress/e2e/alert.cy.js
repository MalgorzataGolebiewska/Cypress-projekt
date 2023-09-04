/// <reference types="cypress" />

import alertPage from "../support/page-object/alertPage";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        alertPage.clickOnButtonAlert1();
        alertPage.verifyAlertText();
    })

    it("Alert confirm", () => {
        alertPage.buttonAlert2();
        alertPage.verifyAlertConfirmText("Zaakceptuj aby kontynuować!");
        alertPage.rejectAlert();
    })
})