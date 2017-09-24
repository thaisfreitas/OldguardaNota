const { expect } = require('chai');
const notaBody = require('../app/nota');

describe('Nota Definitions', () => {
    describe('#getNotaObjectDefinitions', () => {
        it('describe nota attributes', () => {
            const body = { 
                name: 'Abastecimento',
                addres: 'Posto em BV', 
                CPF: 11111111111, 
                from: 'posto nova luz', 
                value: 'R$50'
            };
            notaBody.setNotaBody(body);
            expect(notaBody.getNotaBody()).to.equal(body);
        });
    });
});