describe('User Onboarding Form', () =>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('sanity checks', () => {
        expect(1).to.eql(1)
    })

    const formInput = (name) => cy.get(`input[name=${name}]`)
    const button = (id) => cy.get(`button[id=${id}]`)

    it('checking inputs exist', () => {
        formInput('name').should('exist')
        formInput('email').should('exist')
        formInput('password').should('exist')
        formInput('tos').should('exist')
        button('submitBtn').should('exist')
    })

})