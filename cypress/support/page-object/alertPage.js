class AlertPage {
    get buttonAlert1() {
        return cy.get("#alert");
    }

    get buttonAlert2() {
        return cy.get("#alert-confirm");
    }

    clickOnButtonAlert1() {
        this.buttonAlert1.click();
    }

    clickOnButtonAlert2() {
        this.buttonAlert2.click();
    }

    verifyAlertConfirmText(tekst) {
        cy.on("window:confirm", tresc => {
            expect(tresc).to.equal(tekst)
        })
    }

    verifyAlertText() {
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal("Przykładowa treść alertu")
        })
    }

    rejectAlert() {
        cy.on("window:confirm", () => false)
    }

}

export default new AlertPage();