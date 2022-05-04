describe('How annotation works', ()=>{
    before(()=>{ 
        console.log("************before block*************")
    });
    beforeEach(()=>{
        console.log("************before each block*************")
    });
    it('Explaination of before and after block 1', ()=>{ 
        console.log("************Inside it block 1**************")
    });
    it('Explaination of before and after block 2', ()=>{ 
        console.log("************Inside it block 2**************")
    });
    after(()=>{
        console.log("************after block*************")
    });
    afterEach(()=>{
        console.log("************after each block*************")
    });
})