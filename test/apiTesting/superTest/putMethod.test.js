const supertest = require("supertest");
const request = supertest("https://gorest.co.in/public/v2/");
const {expect} = require('chai')

const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";

describe("REST API PUT method",async ()=>{
    it("Update user data", async ()=>{
        let data = {
            "name": "test6",
            "email": "testname@pandicool.org",
            "gender": "male",
            "status": "active"
        }
        return request.put(`users/4356`).set("Authorization",`Bearer ${token}`).send(data).then((res) =>{
            console.log(res.body)
            expect(res.body).to.deep.includes(data)
        })
    })
})
