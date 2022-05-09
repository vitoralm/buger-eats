import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf'

export default {
    deliver: function () {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email(firstName)
        const userCpf = generate()

        const data = {
            name: `${firstName} ${lastName}`,
            document: userCpf,
            email: email,
            whatsapp: '1199999999',
            address: {
                postalCode: '74093250',
                street: 'Avenida 136',
                number: '761',
                details: '',
                district: 'Setor Sul',
                cityState: 'Goiânia/GO'
            },
            deliveryMethod: 'Moto',
            driverLicense: 'cnh-digital.jpg'
        }

        return data
    }
}