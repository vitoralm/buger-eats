class SignupPage {
    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(person) {
        cy.get('input[name="fullName"]').type(person.name)
        cy.get('input[name="cpf"]').type(person.document)
        cy.get('input[name="email"]').type(person.email)
        cy.get('input[name="whatsapp"]').type(person.whatsapp)
        cy.get('#page-deliver form fieldset:nth-child(3) header[role="legend"] h2').should('have.text', 'Endereço')
        cy.get('#page-deliver form fieldset:nth-child(3) header[role="legend"] span').should('have.text', 'Informe o cep, número e complemento')
        cy.get('input[name="postalcode"]').type(person.address.postalCode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address"]').should('have.value', person.address.street)
        cy.get('input[name="address-number"]').type(person.address.number)
        cy.get('input[name="address-number"]').should('have.value', person.address.number)
        cy.get('input[name="address-details"]').should('have.value', person.address.details)
        cy.get('input[name="district"]').should('have.value', person.address.district)
        cy.get('input[name="city-uf"]').should('have.value', person.address.cityState)

        cy.contains('.delivery-method li', person.deliveryMethod).click()
        cy.get('input[accept^="image"]').attachFile('images/' + person.driverLicense)


        cy.get('#page-deliver form fieldset:nth-child(4) header[role="legend"] h2').should('have.text', 'Método de entrega')
        cy.get('#page-deliver form fieldset:nth-child(4) header[role="legend"] span').should('have.text', 'Escolha um dos métodos abaixo:')
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContainerShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-title').should('have.text', expectedMessage.title)

        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage.container)

        cy.get('.swal2-container button[class="swal2-confirm swal2-styled"]').click()
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').should('have.text', 'Cadastre-se para fazer entregas')
    }

    alertMessageShouldBe(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage)
    }
}

export default new SignupPage;