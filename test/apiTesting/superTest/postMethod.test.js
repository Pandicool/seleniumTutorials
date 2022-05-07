const supertest = require("supertest");
const request = supertest("https://gorest.co.in/public/v2/");
const {expect} = require('chai')

const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";

describe("REST API POST method",async ()=>{
    it("create new user data", async ()=>{
        let data = {
            "name": "test6",
            "email": "test8@pandicool.org",
            "gender": "male",
            "status": "active"
        }
        return request.post(`users`).set("Authorization",`Bearer ${token}`).send(data).then((res) =>{
            console.log(res.body)
            // data.email = "test2@pandicool.org"
            expect(res.body).to.deep.includes(data)
        })
    })
})
