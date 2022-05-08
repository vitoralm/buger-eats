import signupPage from '../pages/SignupPage'

describe('Sign up', () => {

    beforeEach(function () {
        cy.fixture('deliver.json').then((deliver) => {
            this.deliver = deliver
        })
    })

    it('should register user as deliveryman', function () {
        signupPage.go()
        signupPage.fillForm(this.deliver.signup)
        signupPage.submit()
        const expectedMessage = {
            title: 'Aí Sim...',
            container: 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        }
        signupPage.modalContainerShouldBe(expectedMessage)
    })

    it("should enter invalid document", function () {
        signupPage.go()
        signupPage.fillForm(this.deliver.cpf_inv)
        signupPage.submit()
        const expectedAlert = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedAlert)

    })
})