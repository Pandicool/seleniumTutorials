const supertest = require("supertest");
const request = supertest("https://gorest.co.in/public/v2/");
const {expect} = require('chai')

const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";
let id;

describe("@REST_API_TESTING@",async ()=>{
    it("get a data with filtering params", async ()=>{
        let url = `users?access-token=${token}&page=2&gender=female`;
        request.get(url).end((err,res) => {
            res.body.forEach(data => {
                expect(data.gender).to.eq('female')
            });
        })
    })
    it("create new user data", async ()=>{
        let data = {
            "name": "testname2",
            "email": "testname2@pandicool.org",
            "gender": "male",
            "status": "active"
        }
        return request.post(`users`).set("Authorization",`Bearer ${token}`).send(data).then((res) =>{
            console.log("created data : ", res.body)
            id = res.body.id;
            expect(res.body).to.deep.includes(data)
        })
    })
    it("Update user data", async ()=>{
        let data = {
            "name": "testname",
            "email": "test@pandicool.org",
            "gender": "male",
            "status": "active"
        }
        return request.put(`users/${id}`).set("Authorization",`Bearer ${token}`).send(data).then((res) =>{
            console.log("updated data : ", res.body)
            expect(res.body).to.deep.includes(data)
        })
    })
    it("Delete user data", async ()=>{
        return request.delete(`users/${id}`).set("Authorization",`Bearer ${token}`).then((res) =>{
            expect(res.body).to.be.empty;
        })
    })
    
})
