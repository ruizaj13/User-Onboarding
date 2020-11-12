import React from 'react'

const onSubmit = event => {
    event.preventDefault()
}

export default function Form() {
    return(
      <form className='App' onSubmit={onSubmit}>
          <h1>User Onboarding</h1>
          <label>
              Name: <input type='text'/>
          </label>
            <br/>
            <br/>
          <label>
              Email: <input type='email'/>
          </label>
            <br/>
            <br/>
          <label>
              Password: <input type='password'/>
          </label>
            <br/>
            <br/>
          <label>
              Terms of Service: <input type='checkbox'/>
          </label>
            <br/>
          <button>Submit</button> 
      </form>
    )
}
