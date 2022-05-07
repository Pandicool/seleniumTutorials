const supertest = require("supertest");
const request = supertest("https://gorest.co.in/public/v2/");
const {expect} = require('chai')

const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";

describe("REST API Get method",async ()=>{
    it("get user", async ()=>{
        request.get(`users?access-token=${token}`).end((err,res) => {
            console.log("Response : ",res.body);
            expect(res.body).not.to.be.empty;
        })
    })
    it("get user without token", async ()=>{
        request.get(`users`).end((err,res) => {
            console.log(res.body);
        })
    })
    it("get a second page first user data from api", async ()=>{
        request.get(`users?page=2`).end((err,res) => {
            console.log(res.body[0]);
        })
    })

    it("get a data with filtering params", async ()=>{
        let url = `users?access-token=${token}&page=2&gender=female`;
        request.get(url).end((err,res) => {
            console.log(res.body);
            res.body.forEach(data => {
                expect(data.gender).to.eq('female')
            });
        })
    })
    it.only("get a data with pagination, filtering, sorting params", async ()=>{
        let url = `users?sortBy=name:asc`;
        request.get(url).end((err,res) => {
            console.log(res.body);
            // res.body.forEach(data => {
            //     expect(data.gender).to.eq('female')
            // });
        })
    })
})

