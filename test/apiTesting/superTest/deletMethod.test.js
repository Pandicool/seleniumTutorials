const supertest = require("supertest");
const request = supertest("https://gorest.co.in/public/v2/");
const {expect} = require('chai')

const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";

describe("REST API DETELE method",async ()=>{
    it("Delete user data", async ()=>{
        return request.delete(`users/6140`).set("Authorization",`Bearer ${token}`).then((res) =>{
            console.log(res.body)
        })
    })
})
