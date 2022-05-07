const assert = require('assert');
const { expect } = require('chai');

describe('Assertion and chai', async () => {
    it('assertion length', async () => {
        assert.equal("Hello".length, 5);
    })
    it('asserting the letter', async () => {
        assert.equal("Hello".charAt(0), 'H');
    })
    it('expect true', async () => {
        let isValid = true;
        expect(isValid).to.be.true;
    })
    it('should have property name with value Figo', function () {
        var car = { name: 'Figo', Maker: 'Ford' };
        expect(car).to.have.property('name').to.equal('Figo');
    });
    it(`expected value`, function () {
        assert.strictEqual(6, 6);
    });
    it.skip("should create a new user", async function () {
        const stubValue = {
            id: faker.random.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past()
        };

        expect(user.id).to.equal(stubValue.id);
        expect(user.name).to.equal(stubValue.name);
        expect(user.email).to.equal(stubValue.email);
        expect(user.createdAt).to.equal(stubValue.createdAt);
        expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
    it("type assertion", async () => {
        expect('foo').to.be.a('string');
        expect({ a: 1 }).to.be.an('object');
        expect([1,2]).to.be.an('array');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(Promise.resolve()).to.be.a('promise');
        expect(new Float32Array).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol');
    })
})