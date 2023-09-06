/// <reference types="cypress" />

describe("E2E - Testy API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Weryfikacja tagow API", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("introduction")
        })

    })
    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin");
        cy.visit("https://angular.realworld.io/")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test123@test.pl", "321659874")
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
        })
    
    })
    it("Poprawne logowanie", function() {
        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'tags.json' }).as("requestTag");
        cy.visit("https://angular.realworld.io/")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test123@test123.pl", "test")
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.body.tags).to.contain("cat")
        })

    })
})