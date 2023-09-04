class SelectPage {
    get select() {
        return cy.get("#selectProductSort");
    }

    selectAllOption() {
        this.select.then(dropdown => {
            cy.wrap(dropdown).find("option").each(opcja => {
                cy.wrap(opcja.text())
            })
        })
    }

}

export default new SelectPage();