const axios = require("axios").default;
const qs = require('qs')
const { expect } = require('chai')
const BaseURL = 'https://gorest.co.in/public/v2/';
const token = "138c4003b679cbc8d5a9e350dd048a43fcae905a95c7b3c3751e694ae1ef931f";
// axios.defaults.headers.common['Authorization'] = token;
let id;
let userID = 20;

describe("@REST_API_TESTING@", async () => {
    it("get a data with filtering params", async () => {
        axios({
            method: 'get',
            baseURL: BaseURL,
            url: `users?page=2&gender=female`,
            responseType: 'json',
        }).then(function (response) {
                expect(response.data).not.to.be.empty;
        });
    })
    it("create new user data", async () => {
        let data = {
            "name": "testname6",
            "email": `testname${userID}@pandicool.org`,
            "gender": "male",
            "status": "active"
        }
        return axios.post(`${BaseURL}/users`, data, {
            headers: {
                'content-type': 'application/JSON',
                Authorization: `Bearer ${token}`
            },
        }).then((response, error) => {
            console.log("added data : ",response.data)
            id = response.data.id;
            expect(response.data).to.deep.includes(data)
            if (error)
                console.log(error)
        });
    })
    it("Update user data", async () => {
        let data = {
            "name": "testname",
            "email": `test@pandicool${userID}.org`,
            "gender": "male",
            "status": "active"
        }
        return axios.put(`${BaseURL}/users/${id}`, data, {
            headers: {
                'content-type': 'application/JSON',
                Authorization: `Bearer ${token}`
            },
        }).then((response) => {
            console.log("updated data", response.data)
            id = response.data.id;
            expect(response.data).to.deep.includes(data)
        },(error) => {console.log(error) });
    })
    it.only("Delete user data", async () => {
        axios.delete(`${BaseURL}/users/${id}`, {
            headers: {
                'content-type': 'application/JSON',
                Authorization: `Bearer ${token}`
            },
        }).then((response, error) => {
            expect(response.data).to.be.empty;
            if (error)
                console.log(error)
        });
    })

})
