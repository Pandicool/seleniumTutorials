const supertest = require("supertest");
const req = supertest("https://gorest.co.in/public-api/");
const {expect} = require('chai')


const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";

describe("Api testing",async ()=>{
    it.only("get user", async ()=>{
        req.get(`users?access-token=${token}`).end((err,res) => {
            expect(res.body).not.to.be.empty;

        })
    })
    it("get user without token", async ()=>{
        req.get(`users`).end((err,res) => {
            console.log(res.body);
        })
    })
})
