import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Sign up', () => {

    beforeEach(function () {
        // cy.fixture('deliver.json').then((deliver) => {
        //     this.deliver = deliver
        // })
        this.deliver = signupFactory.deliver()
    })

    it('should register user as deliveryman', function () {

        signupPage.go()
        signupPage.fillForm(this.deliver)
        signupPage.submit()
        const expectedMessage = {
            title: 'Aí Sim...',
            container: 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        }
        signupPage.modalContainerShouldBe(expectedMessage)
    })

    it("should enter invalid document", function () {

        this.deliver.document = '11111111111'
        signupPage.go()
        signupPage.fillForm(this.deliver)
        signupPage.submit()
        const expectedAlert = 'Oops! CPF inválido'
        signupPage.alertMessageShouldBe(expectedAlert)

    })

    it("should enter invalid email", function () {

        this.deliver.email = 'user.com.br'
        signupPage.go()
        signupPage.fillForm(this.deliver)
        signupPage.submit()
        const expectedAlert = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedAlert)

    })
})