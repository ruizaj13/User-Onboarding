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

    describe('testing text inputs are functional', () => { 

        it('can type in input fields', () => {
            formInput('name')
                .should('have.value', '')
                .type('Billy')
                .should('have.value', 'Billy')
            formInput('email')
                .should('have.value', '')
                .type('billyissilly@yahoo.com')
                .should('have.value', 'billyissilly@yahoo.com')
            formInput('password')
                .should('have.value', '')
                .type('billybillybilly')
                .should('have.value','billybillybilly')
        })

        it('tos can be checked', () => {
            formInput('tos').should('not.be.checked')
            formInput('tos').check().should('be.checked')
            formInput('tos').uncheck()
        })

        it('submit button enables when form is filled and user is submitted', () => {
            button('submitBtn').should('be.disabled')
            formInput('name').type('Billy')
            formInput('email').type('billyissilly@yahoo.com')
            formInput('password').type('billybillybilly')
            formInput('tos').check()
            button('submitBtn').should('be.enabled').click()
            
        })

       
    })
    

})