/// <reference types="cypress" />

describe("Wykonanie zapytania bezposrednio do API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Autoryzacja + Dodanie nowego aurtykulu", () =>{
        const daneAutoryzacja = {
            "user": {
                "email": "test123@test123.pl",
                "password": "test"
            }
        }

        const daneArtykul = {
            "article": {
                "tagList": [],
                "title": "VisualStudio",
                "description": "testuje",
                "body": "test"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja).its("body").then(res => {
            const authToken = res.user.token;

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: daneArtykul,
                headers: {
                   'Authorization': 'Token ' + authToken,
                }
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })
})