const DataDriven = require('data-driven');

describe('Test data driven Demo test', async () => {
    DataDriven([1,2,3,4], async () => {
        it('print testData values', async (testData) => {
            console.log("Test data value : ", testData);
        })
    })
})