describe('User Onboarding Form', () =>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('sanity checks', () => {
        expect(1).to.eql(1)
    })

    const textInput = (name) => cy.get(`input[name=${name}]`)

})